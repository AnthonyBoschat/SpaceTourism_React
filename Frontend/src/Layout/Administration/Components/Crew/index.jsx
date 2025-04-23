import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import ENDPOINTS from "@Physics/Constants/endpoints"
import { setMemberCrew } from "@Physics/Redux/Slices/crewSlice"
import formatDate from "@Physics/Services/formatDate"
import callBackend from "@Physics/Services/callBackend"
import { toast } from "react-toastify"
import Administration_Card from "../Card"


export default function Administration_Crews(){

    const crewMembers = useSelector(store => store.crew.crewMembers)
    const dispatch = useDispatch()


    if(crewMembers){
        return(
            <ul id="administration-element-list">
            {crewMembers.map(member => 
            <Administration_Card 
                fields={[
                    {label:"name", type:"input"},
                    {label:"role", type:"input"},
                    {label:"presentation", type:"textarea"},
                ]} 
                element={member}
                endpoint={ENDPOINTS.CREWS.UPDATE}
                callback={(response) => {
                    dispatch(setMemberCrew(response))
                    toast.success("Le membre du crew a correctement été mis à jour")
                }}
                
                />)}
            </ul>
        )
    }
}