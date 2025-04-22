import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import { setMemberCrew } from "@Physics/Redux/Slices/crewSlice"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"

const Line = ({dispatch, member, updatingID, setUpdatingID} ) => {
    const isUpdating = member.id === updatingID;

    const [name, setName] = useState(null);
    const [role, setRole] = useState(null);
    const [presentation, setPresentation] = useState(null);

    useEffect(() => {
        if (isUpdating) {
            setName(member.name);
            setRole(member.role);
            setPresentation(member.presentation);
        }
    }, [isUpdating]);

    const sendUpdating = async() => {
        const response = await callBackend(ENDPOINTS.CREWS.UPDATE, "POST", {
            id:member.id,
            name,
            role,
            presentation,
        })
        dispatch(setMemberCrew(response))
        setUpdatingID(null)
        toast.success("Le membre du crew a correctement été mis à jour")
    }

    if (!isUpdating) {
        return (
            <tr>
                <td>{member.name}</td>
                <td>{member.role}</td>
                <td>{member.presentation}</td>
                <td><img src={member.image} alt="" /></td>
                <td>{formatDate(member.updated_at)}</td>
                <td className="actions">
                    <button onClick={() => setUpdatingID(member.id)}>Modifier</button>
                </td>
            </tr>
        );
    }

    return (
        <tr className="updating">
            <td><input type="text" value={name} onChange={e => setName(e.target.value)} /></td>
            <td><input type="text" value={role} onChange={e => setRole(e.target.value)} /></td>
            <td>
                <textarea 
                    style={{ width: "100%", height: "100%" }} 
                    value={presentation}
                    onChange={e => setPresentation(e.target.value)}
                />
            </td>
            <td><img src={member.image} alt="" /></td>
            <td>{formatDate(member.updated_at)}</td>
            <td className="actions">
                <button className="save" onClick={sendUpdating}>Enregistrer</button>
                <button className="cancel" onClick={() => setUpdatingID(null)}>Annuler</button>
            </td>
        </tr>
    );
};

export default function Administration_Crews(){

    const crewMembers = useSelector(store => store.crew.crewMembers)
    const dispatch = useDispatch()
    const [updatingID, setUpdatingID] = useState(null)


    if(crewMembers){
        return(
            <>
                <table id="administration-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Presentation</th>
                            <th>Image</th>
                            <th>Dernière modification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {crewMembers.map((member) => <Line dispatch={dispatch} member={member} updatingID={updatingID} setUpdatingID={setUpdatingID}/>)}
                    </tbody>
                </table>
            </>
        )
    }
}