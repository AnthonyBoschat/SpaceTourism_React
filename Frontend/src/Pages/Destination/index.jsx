import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setDestinations } from "@Physics/Redux/Slices/destinationSlice"
import ENDPOINTS from "@Physics/Constants/endpoints"
import Destination_Layout from "@Layout/Destination"

export default function Destination_Page(){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const loadDestinations = async() => {
        const response = await fetch(ENDPOINTS.DESTINATIONS.GET_ALL)
        const data = await response.json()
        dispatch(setDestinations(data))
        setLoading(false)
    }
    
    useEffect(() => {
        loadDestinations()
    }, [])

    


    if(!loading){
        return(
            <Destination_Layout/>
        )
    }
}