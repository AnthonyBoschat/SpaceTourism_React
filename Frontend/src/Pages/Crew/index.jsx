import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setCrews } from "@Physics/Redux/Slices/crewSlice"
import ENDPOINTS from "@Physics/Constants/endpoints"
import Crew_Layout from "@Layout/Crew"

export default function Crew_Page(){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const loadCrews = async() => {
        const response = await fetch(ENDPOINTS.CREWS.GET_ALL)
        const data = await response.json()
        dispatch(setCrews(data))
        setLoading(false)
    }

    useEffect(() => {
        loadCrews()
    }, [])


    if(!loading){
        return(
            <Crew_Layout/>
        )

    }
}