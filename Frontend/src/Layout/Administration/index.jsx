import { useDispatch, useSelector } from "react-redux";
import Administration_Navigation from "./Components/Navigation";
import "./style.scss";
import { useEffect, useMemo, useState } from "react";
import callBackend from "@Physics/Services/callBackend";
import ENDPOINTS from "@Physics/Constants/endpoints";
import { deleteMemberCrew, setCrews, setMemberCrew } from "@Physics/Redux/Slices/crewSlice";
import { deleteDestination, setDestination, setDestinations } from "@Physics/Redux/Slices/destinationSlice";
import { deleteTechno, setTechno, setTechnology } from "@Physics/Redux/Slices/technologySlice";
import { toast } from "react-toastify";
import Administration_Card from "./Components/Card";


export default function Administration_Layout(){

    const [loading, setLoading] = useState(true)
    
    const tabs = useSelector(store => store.administration.tabs)
    const dispatch = useDispatch()
    const crewMembers = useSelector(store => store.crew.crewMembers)
    const destinations = useSelector(store => store.destination.destinations)
    const technology = useSelector(store => store.technology.technology)

    


    const tables = {
        crews: {
            fields:[
                {label:"name", type:"input"},
                {label:"role", type:"input"},
                {label:"presentation", type:"textarea"},
            ],
            endpoint:{
                UPDATE : ENDPOINTS.CREWS.UPDATE,
                DELETE : ENDPOINTS.CREWS.DELETE,
            },
            datasource:crewMembers,
            callback:{
                UPDATE:(response) => {
                    dispatch(setMemberCrew(response))
                    toast.success("Crew member updated")
                },
                DELETE:(response) => {
                    dispatch(deleteMemberCrew(response))
                    toast.success("Crew member deleted")
                }
            }
        },
        destinations:{
            fields:[
                {label:"name", type:"input"},
                {label:"description", type:"textarea"},
                {label:"distance", type:"input"},
                {label:"travelTime", type:"input"},
            ],
            endpoint:{
                UPDATE : ENDPOINTS.DESTINATIONS.UPDATE,
                DELETE : ENDPOINTS.DESTINATIONS.DELETE,
            },
            datasource:destinations,
            callback:{
                UPDATE:(response) => {
                    dispatch(setDestination(response))
                    toast.success("Destination updated")
                },
                DELETE:(response) => {
                    dispatch(deleteDestination(response))
                    toast.success("Destination deleted")
                }
            }
        },
        technology:{
            fields:[
                {label:"name", type:"input"},
                {label:"presentation", type:"textarea"},
            ],
            endpoint:{
                UPDATE : ENDPOINTS.TECHNOLOGY.UPDATE,
                DELETE : ENDPOINTS.TECHNOLOGY.DELETE,
            },
            datasource:technology,
            callback:{
                UPDATE:(response) => {
                    dispatch(setTechno(response))
                    toast.success("Technology updated")
                },
                DELETE:(response) => {
                    dispatch(deleteTechno(response))
                    toast.success("Technology deleted")
                }
            }
        },
    }

    const activeTab = useMemo(() => tabs.find(tab => tab.active) ?? tabs[0], [tabs]);
    const dataTable = useMemo(() => ({...tables[activeTab.key]}), [activeTab, crewMembers, destinations, technology]);



    // Récupère les données du backend
    const loadData = async() => {
        const crew = await callBackend(ENDPOINTS.CREWS.GET_ALL)
        dispatch(setCrews(crew))
        const destinations = await callBackend(ENDPOINTS.DESTINATIONS.GET_ALL)
        dispatch(setDestinations(destinations))
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
                    {(!loading && dataTable?.datasource && dataTable?.datasource.length !== 0) && (
                        <div className="modules">
                            <ul id="administration-element-list">
                                {dataTable?.datasource?.map(element => (
                                    <Administration_Card
                                        key={`${activeTab.key}-${element.id}`}
                                        fields={dataTable.fields} 
                                        element={element}
                                        endpoint={dataTable.endpoint}
                                        callback={dataTable.callback}
                                        
                                    />
                                ))}
                            </ul>
                        </div>
                    )}
                    {(!loading && dataTable?.datasource && dataTable?.datasource.length === 0) && (
                        <div className="modules">
                            <ul id="administration-element-list">
                                <h2>No data</h2>
                            </ul>
                        </div>
                        
                    )}
                    {(loading && !dataTable?.datasource) && (
                        <i className="fa-solid fa-spinner loading"></i>
                    )}
                </div>
            </div>
        </main>
    )
    
}