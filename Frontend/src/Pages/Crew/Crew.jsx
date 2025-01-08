import { useDispatch, useSelector } from "react-redux"
import "./Crew.scss"
import { useState } from "react"
import { selectCrewMember } from "@Physics/Redux/Slices/crewSlice"

export default function Crew(){

    const dispatch = useDispatch()
    const crewMembers = useSelector(store => store.crew.crewMembers)
    const selectedCrewMember = useSelector(store => store.crew.selectedCrewMember)
    const [crewMemberIsChanging, setCrewMemberIsChanging] = useState(false)


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

    return(
        <main className="main-crew">
            {/* INSTRUCTION */}
            <span className="instructions">
                <span className="step">02</span>
                <span>Meet your crew</span>
            </span>

            {/* CREW-IMAGE */}
            <section className="crew-photo">
                <picture>
                    <img className={`photo ${crewMemberIsChanging ? "animationClass_opacity-out-in-1000" : ""}`} 
                    src={selectedCrewMember.image} 
                    alt=""/>
                </picture>
            </section>

            {/* CREW-DESCRIPTION */}
            <section className="crew-description">

                <ul className="crew-carousel">
                    {crewMembers.map(member => (
                        <li 
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