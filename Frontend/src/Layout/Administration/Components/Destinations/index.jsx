import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"
import { setPlanet } from "@Physics/Redux/Slices/destinationSlice"

const Line = ({dispatch, planet, updatingID, setUpdatingID} ) => {
    const isUpdating = planet.id === updatingID;

    const [name, setName] = useState(null);
    const [description, setDescription] = useState(null);
    const [distance, setDistance] = useState(null);
    const [travelTime, setTravelTime] = useState(null);

    useEffect(() => {
        if (isUpdating) {
            setName(planet.name);
            setDescription(planet.description);
            setDistance(planet.distance);
            setTravelTime(planet.travelTime)
        }
    }, [isUpdating]);

    const sendUpdating = async() => {
        const response = await callBackend(ENDPOINTS.DESTINATIONS.UPDATE, "POST", {
            id:planet.id,
            name,
            description,
            distance,
            travelTime,
        })
        dispatch(setPlanet(response))
        setUpdatingID(null)
        toast.success("La destination a correctement été mise à jour")
    }

    if (!isUpdating) {
        return (
            <tr>
                <td>{planet.name}</td>
                <td>{planet.description}</td>
                <td>{planet.distance}</td>
                <td>{planet.travelTime}</td>
                <td><img src={planet.image} alt="" /></td>
                <td>{formatDate(planet.updated_at)}</td>
                <td className="actions">
                    <button onClick={() => setUpdatingID(planet.id)}>Modifier</button>
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
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
            </td>
            <td><input type="text" value={distance} onChange={e => setDistance(e.target.value)} /></td>
            <td><input type="text" value={travelTime} onChange={e => setTravelTime(e.target.value)} /></td>
            <td><img src={planet.image} alt="" /></td>
            <td>{formatDate(planet.updated_at)}</td>
            <td className="actions">
                <button className="save" onClick={sendUpdating}>Enregistrer</button>
                <button className="cancel" onClick={() => setUpdatingID(null)}>Annuler</button>
            </td>
        </tr>
    );
};

export default function Administration_Destinations(){

    const planets = useSelector(store => store.destination.planets)
    const dispatch = useDispatch()
    const [updatingID, setUpdatingID] = useState(null)

    if(planets){
        return(
            <>
                <table id="administration-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Distance</th>
                            <th>TravelTime</th>
                            <th>Image</th>
                            <th>Dernière modification</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {planets.map((planet) => <Line key={planet.id} dispatch={dispatch} planet={planet} updatingID={updatingID} setUpdatingID={setUpdatingID}/>)}
                    </tbody>
                </table>
            </>
        )
    }
}