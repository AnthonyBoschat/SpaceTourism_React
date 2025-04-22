import { useDispatch, useSelector } from "react-redux";
import Administration_Navigation from "./Components/Navigation";
import "./style.scss";
import { useEffect, useState } from "react";
import Administration_Crews from "./Components/Crew";
import Administration_Destinations from "./Components/Destinations";
import Administration_Technology from "./Components/Technology";
import callBackend from "@Physics/Services/callBackend";
import ENDPOINTS from "@Physics/Constants/endpoints";
import { setCrews } from "@Physics/Redux/Slices/crewSlice";
import { setPlanets } from "@Physics/Redux/Slices/destinationSlice";
import { setTechnology } from "@Physics/Redux/Slices/technologySlice";

const COMPONENTS = {
    crews:        <Administration_Crews/>,
    destinations: <Administration_Destinations/>,
    technology:   <Administration_Technology/>,
  };

export default function Administration_Layout(){

    const [loading, setLoading] = useState(true)
    const [activeComponent, setActiveComponent] = useState(null)
    const tabs = useSelector(store => store.administration.tabs)
    const dispatch = useDispatch()

    useEffect(() => {
        const activeTab = tabs.find(tab => tab.active)
        setActiveComponent(COMPONENTS[activeTab.key])
    }, [tabs])

    const loadData = async() => {
        const crew = await callBackend(ENDPOINTS.CREWS.GET_ALL)
        dispatch(setCrews(crew))
        const destinations = await callBackend(ENDPOINTS.DESTINATIONS.GET_ALL)
        dispatch(setPlanets(destinations))
        const technology = await callBackend(ENDPOINTS.TECHNOLOGY.GET_ALL)
        dispatch(setTechnology(technology))
        setLoading(false)
    }

    useEffect(() => {
        if(loading){
            loadData()
        }
    }, [loading])


    
        
    return(
        <main id="main-administration">
            <div className="header">
                <h1>Outil d'administration</h1>
            </div>
            <div className="content-container">
                <div className="content">
                    <Administration_Navigation/>
                    {!loading && (
                        <div className="modules">
                            {activeComponent}
                        </div>
                    )}
                    {loading && (
                        <i className="fa-solid fa-spinner loading"></i>
                    )}
                </div>
            </div>
        </main>
    )
    
}