import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"
import { setTechno } from "@Physics/Redux/Slices/technologySlice"
import Administration_Card from "../Card"



export default function Administration_Technology(){

    const technology = useSelector(store => store.technology.technology)
    const dispatch = useDispatch()
    const [updatingID, setUpdatingID] = useState(null)

    if(technology){
        return(
            <ul id="administration-element-list">
            {technology.map(techno => 
            <Administration_Card
                fields={[
                    {label:"name", type:"input"},
                    {label:"presentation", type:"textarea"},
                ]} 
                element={techno}
                endpoint={ENDPOINTS.TECHNOLOGY.UPDATE}
                callback={(response) => {
                    dispatch(setTechno(response))
                    toast.success("La technologie a correctement été mise à jour")
                }}
                
                />)}
            </ul>
        )
    }
}