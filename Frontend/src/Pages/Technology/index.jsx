import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import { setTechnology } from "@Physics/Redux/Slices/technologySlice"
import ENDPOINTS from "@Physics/Constants/endpoints"
import Technology_Layout from "@Layout/Technology"

export default function Technology_Page(){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    const loadTechnology = async() => {
        const response = await fetch(ENDPOINTS.TECHNOLOGY.GET_ALL)
        const data = await response.json()
        dispatch(setTechnology(data))
        setLoading(false)
    }

    useEffect(() => {
        loadTechnology()
    }, [])

    

    if(!loading){

        return(
            <Technology_Layout/>
        )
    }
}