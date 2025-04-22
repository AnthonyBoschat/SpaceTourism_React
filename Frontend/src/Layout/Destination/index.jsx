import { useDispatch, useSelector } from "react-redux"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import { selectPlanet, setPlanets } from "@Physics/Redux/Slices/destinationSlice"
import ENDPOINTS from "@Physics/Constants/endpoints"

export default function Destination_Layout(){

    const dispatch = useDispatch()
    const [planetIsChanging, setPlanetIsChanging] = useState(false)
    const maskRef = useRef()
    const planets = useSelector(store => store.destination.planets)
    const selectedPlanet = useSelector(store => store.destination.selectedPlanet)


    // Sert à précharger les images
    useEffect(() => {
        if (planets) {
          planets.forEach(({ image }) => {
            const img = new Image();
            img.src = image;
          });
        }
      }, [planets]);

    const startPlanetChangingAnimation = (planetName) => {
        if(planetName !== selectedPlanet.name){
            setPlanetIsChanging(true)
            setTimeout(() => {
                dispatch(selectPlanet(planetName))
    
            }, 400);
            setTimeout(() => {
                setPlanetIsChanging(false)
            }, 1000);
        }
    }


    

    return(
        <main className="main-destination">
            
            {/* INSTRUCTION */}
            <span className="instructions">
                <span className="step">01</span>
                <span>Pick your destination</span>
            </span>

            {/* PLANET */}
            <div className="destination-planet-image">
                <picture>
                    <img className="planet-image" src={selectedPlanet.image} alt=""/>
                </picture>
                <div ref={maskRef} className={`mask ${planetIsChanging ? "animationClass_mask-planet-hide-planet" : ""}`}></div>
            </div>

            {/* PLANET LIST */}
                <div className="destination-planet-list">
                {planets.map((planet, index) => (
                    // <a onClick={() => dispatch(selectPlanet(planet.name))} key={index} className={planet === selectedPlanet ? "selected" : "unselected"}>{planet.name}</a>
                    <a onClick={() => startPlanetChangingAnimation(planet.name)} key={index} className={`${planet.name === selectedPlanet.name ? "selected" : "unselected"} ${planetIsChanging ? "animationClass_make-disabled" : ""}`}>{planet.name}</a>
                ))}
                </div>

                {/* PLANET NAME */}
                <div className="destination-planet-name-description">
                    <h1 className={`destination-planet-name ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedPlanet.name}</h1>
                    {/* PLANET DESCRIPTION */}
                    <p className={`destination-planet-description ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedPlanet.description}</p>
                </div>


                {/* SEPARATOR */}
                <div className="destination-separator"></div>

                {/* PLANET INFORMATIONS */}
                <div className="destination-planet-informations">
                    <span className="information">Avg. Distance</span>
                    <span className={`value distance ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedPlanet.distance}</span>
                </div>
                <div className="destination-planet-informations">
                    <span className="information">Est. Travel Time</span>
                    <span className={`value travelTime ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedPlanet.travelTime}</span>
                </div>
            </main>
    )
    
}