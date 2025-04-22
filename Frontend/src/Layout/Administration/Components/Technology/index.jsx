import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"
import { setTechno } from "@Physics/Redux/Slices/technologySlice"

const Line = ({dispatch, techno, updatingID, setUpdatingID} ) => {
    const isUpdating = techno.id === updatingID;

    const [name, setName] = useState(null);
    const [presentation, setPresentation] = useState(null);

    useEffect(() => {
        if (isUpdating) {
            setName(techno.name);
            setPresentation(techno.presentation);
        }
    }, [isUpdating]);

    const sendUpdating = async() => {
        const response = await callBackend(ENDPOINTS.TECHNOLOGY.UPDATE, "POST", {
            id:techno.id,
            name,
            presentation,
        })
        dispatch(setTechno(response))
        setUpdatingID(null)
        toast.success("La technology a correctement été mise à jour")
    }

    if (!isUpdating) {
        return (
            <tr>
                <td>{techno.name}</td>
                <td>{techno.presentation}</td>
                <td><img src={techno.image} alt="" /></td>
                <td>{formatDate(techno.updated_at)}</td>
                <td className="actions">
                    <button onClick={() => setUpdatingID(techno.id)}>Modifier</button>
                </td>
            </tr>
        );
    }

    return (
        <tr className="updating">
            <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
            <td>
                <textarea 
                    style={{ width: "100%", height: "100%" }} 
                    value={presentation}
                    onChange={e => setPresentation(e.target.value)}
                />
            </td>
            <td><img src={techno.image} alt="" /></td>
            <td>{formatDate(techno.updated_at)}</td>
            <td className="actions">
                <button className="save" onClick={sendUpdating}>Enregistrer</button>
                <button className="cancel" onClick={() => setUpdatingID(null)}>Annuler</button>
            </td>
        </tr>
    );
};

export default function Administration_Technology(){

    const technology = useSelector(store => store.technology.technology)
    const dispatch = useDispatch()
    const [updatingID, setUpdatingID] = useState(null)

    if(technology){
        return(
            <>
                <table id="administration-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Présentation</th>
                            <th>Image</th>
                            <th>Dernière modification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {technology.map((techno) => <Line key={techno.id} dispatch={dispatch} techno={techno} updatingID={updatingID} setUpdatingID={setUpdatingID}/>)}
                    </tbody>
                </table>
            </>
        )
    }
}