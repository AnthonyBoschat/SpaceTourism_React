import { useRef, useState } from "react"
import "./style.scss"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"

export default function Administration_Card({element, fields, endpoint, callback}){

    const formRef = useRef(null)
    const [updating, setUpdating] = useState(false)
    const [sending, setSending] = useState(false)
    const [image, setImage] = useState(null)
    const toUpperCase = (string) => string.charAt(0).toUpperCase() + string.slice(1);
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSending(true);
      
        const form = formRef.current;
        const formData = new FormData();
      
        formData.append("id", element.id);
        fields.forEach(({ label }) => {
          const input = form.elements[label];
          if (input) formData.append(label, input.value);
        });
      
        const fileInput = form.elements["image"];
        if (fileInput?.files?.length > 0) {
          formData.append("image", fileInput.files[0]);
        }
      
        const response = await callBackend(endpoint, "POST", formData);
        if (response) callback(response);
        setSending(false);
        setUpdating(false);
      };

    return(
        <li className={`${updating ? "active" : ""}`}>

            <div className={`loader ${sending ? "sending" : ""}`}>
                <i className={`fa-solid fa-spinner loading `}></i>
            </div>
            
            {element.updated_at && ( 
                <div className="updated_at">
                    <span>Dernière mise à jour : <span className="time">{formatDate(element.updated_at)}</span></span>
                </div>
             )}





            <form onSubmit={handleSubmit} ref={formRef} className="fields">

                {element.image_url && ( 
                    <picture>
                        <img 
                            src={element.image_url} 
                            alt={`Photo représentative`} 
                        />
                    </picture>
                )}

                {(updating && element.image_url) && (
                    <input 
                        name="image"
                        id="image"
                        onChange={e => {
                            const file = e.target.files[0];
                            setImage(file);
                        }}   
                        type="file"
                    />
                )}

                {fields.map(field => (
                    <div className="field">
                        <label htmlFor={field.label}>{toUpperCase(field.label)}</label>
                        {field.type === "input" && (
                            <input readOnly={!updating} className={`${!updating ? "read-only" : "updating"}`} id={field.label} name={field.label} defaultValue={element[field.label]} />
                        )}
                        {field.type === "textarea" && (
                            <textarea readOnly={!updating} className={`${!updating ? "read-only" : "updating"}`} id={field.label} name={field.label}>{element[field.label]}</textarea>
                        )}

                    </div>
                ))}
                
                <div className="actions">
                    {!updating && (
                        <button onClick={() => setUpdating(true)} className="action update">Update</button>
                    )}
                    {updating && (
                        <>
                            <button type="submit" className="action validate">Validate</button>
                            <button onClick={() => {
                                    formRef.current?.reset()
                                    setUpdating(false)
                                }} className="action cancel">Cancel</button>
                        </>
                    )}
                </div>

            </form>

        </li>
    )
}