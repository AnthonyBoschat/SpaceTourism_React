import { useDispatch, useSelector } from "react-redux"
import "./Technology.scss"
import { useState } from "react"
import { selectTechnology } from "@Physics/Redux/Slices/technologySlice"

export default function Technology(){

    const dispatch = useDispatch()
    const technology = useSelector(store => store.technology.technology)
    const selectedtechnology = useSelector(store => store.technology.selectedTechnology)
    const [technologyIsChanging, setTechnologyIsChanging] = useState(false)

    const startCrewMemberChangingAnimation = (technologyName) => {
        if(technologyName !== selectedtechnology.name){
            setTechnologyIsChanging(true)
            setTimeout(() => {
                dispatch(selectTechnology(technologyName))
            }, 500);
            setTimeout(() => {
                setTechnologyIsChanging(false)
            }, 1000);
        }
    }

    return(
        <main className="main-technology">
            {/* INSTRUCTION */}
            <span className="instructions">
                <span className="step">03</span>
                <span>Space Launch 101</span>
            </span>

            {/* TECHNOLOGY IMAGE */}
            <section className="techno-photo">
                <picture>
                    <img className={`photo ${technologyIsChanging ? "animationClass_opacity-out-in-1000" : ""}`} src={selectedtechnology.image} alt=""/>
                </picture>
            </section>

            {/* CARROUSSEL */}
            <section className="techno-carousel">
                {technology.map((techno, index) => (
                    <button 
                        key={techno.name}
                        onClick={() => startCrewMemberChangingAnimation(techno.name)} 
                        className={
                            `${techno.name === selectedtechnology.name ? "selected" : "unselected"}
                             ${technologyIsChanging ? "animationClass_make-disabled" : ""}`
                        }>{index+1}</button>
                ))}
            </section>


            {/* DESRIPTION */}
            <section className="description">
                <span className="terminology">
                    THE TERMINOLOGY…
                </span>
                <h1 className={`techno-name ${technologyIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedtechnology.name}</h1>
                <p className={`techno-description ${technologyIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedtechnology.presentation}</p>
            </section>

        </main>
    )
}