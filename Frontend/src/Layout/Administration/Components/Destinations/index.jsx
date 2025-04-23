import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"
import { setPlanet } from "@Physics/Redux/Slices/destinationSlice"
import Administration_Card from "../Card"


export default function Administration_Destinations(){

    const planets = useSelector(store => store.destination.planets)
    const dispatch = useDispatch()

    if(planets){
        return(
            <ul id="administration-element-list">
            {planets.map(planet => 
            <Administration_Card
                fields={[
                    {label:"name", type:"input"},
                    {label:"description", type:"textarea"},
                    {label:"distance", type:"input"},
                    {label:"travelTime", type:"input"},
                ]} 
                element={planet}
                endpoint={ENDPOINTS.DESTINATIONS.UPDATE}
                callback={(response) => {
                    dispatch(setPlanet(response))
                    toast.success("La destination a correctement été mise à jour")
                }}
                
                />)}
            </ul>
        )
    }
}