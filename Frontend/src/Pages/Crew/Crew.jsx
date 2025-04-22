import { useDispatch, useSelector } from "react-redux"
import "./Crew.scss"
import { useEffect, useState } from "react"
import { selectCrewMember, setCrews } from "@Physics/Redux/Slices/crewSlice"
import ENDPOINTS from "@Physics/Constants/endpoints"

export default function Crew(){

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)
    const crewMembers = useSelector(store => store.crew.crewMembers)
    const selectedCrewMember = useSelector(store => store.crew.selectedCrewMember)
    const [crewMemberIsChanging, setCrewMemberIsChanging] = useState(false)

    const loadCrews = async() => {
        const response = await fetch(ENDPOINTS.CREWS.GET_ALL)
        const data = await response.json()
        dispatch(setCrews(data))
        setLoading(false)
    }

    useEffect(() => {
        loadCrews()
    }, [])

    const startCrewMemberChangingAnimation = (memberName) => {
        if(memberName !== selectedCrewMember.name){
            setCrewMemberIsChanging(true)
                setTimeout(() => {
                    dispatch(selectCrewMember(memberName))
                }, 500);
                setTimeout(() => {
                    setCrewMemberIsChanging(false)
                }, 1000);
            }
        }


    if(!loading){
        return(
            <main className="main-crew">
                {/* INSTRUCTION */}
                <span className="instructions">
                    <span className="step">02</span>
                    <span>Meet your crew</span>
                </span>
    
                {/* CREW-IMAGE */}
                <section className="crew-photo">
                    <picture className={`${crewMemberIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>
                        {crewMembers.map(member => (
                            <img key={member.id} className={`photo`} style={member !== selectedCrewMember ? {display:"none"} : null} src={member.image}></img>
                        ))}
                    </picture>
                </section>
    
                {/* CREW-DESCRIPTION */}
                <section className="crew-description">
    
                    <ul className="crew-carousel">
                        {crewMembers.map(member => (
                            <li 
                                key={member.id}
                                onClick={() => startCrewMemberChangingAnimation(member.name)}
                                className={`${member.name === selectedCrewMember.name ? "selected" : "unselected"} ${crewMemberIsChanging ? "animationClass_make-disabled" : ""}`}></li>
                        ))}
                    </ul>
    
    
                    <div className="crew-role-name-layout">
                        <span className={`crew-role ${crewMemberIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedCrewMember.role}</span>
                        <span className={`crew-name ${crewMemberIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedCrewMember.name}</span>
                    </div>
    
                    <div className="crew-presentation-layout">
                        <p className={`crew-presentation ${crewMemberIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedCrewMember.presentation}</p>
                    </div>
                </section>
            </main>
        )

    }
}