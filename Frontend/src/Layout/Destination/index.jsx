import { useDispatch, useSelector } from "react-redux"
import "./style.scss"
import { useEffect, useRef, useState } from "react"
import { selectDestination } from "@Physics/Redux/Slices/destinationSlice"

export default function Destination_Layout(){

    const dispatch = useDispatch()
    const [planetIsChanging, setDestinationIsChanging] = useState(false)
    const maskRef = useRef()
    const destinations = useSelector(store => store.destination.destinations)
    const selectedDestination = useSelector(store => store.destination.selectedDestination)


    // Sert à précharger les images
    useEffect(() => {
        if (destinations) {
          destinations.forEach(({ image }) => {
            const img = new Image();
            img.src = image;
          });
        }
      }, [destinations]);


    const startPlanetChangingAnimation = (planetName) => {
        if(planetName !== selectedDestination.name){
            setDestinationIsChanging(true)
            setTimeout(() => {
                dispatch(selectDestination(planetName))
    
            }, 400);
            setTimeout(() => {
                setDestinationIsChanging(false)
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
                    <img className="planet-image" src={selectedDestination.image_url} alt=""/>
                </picture>
                <div ref={maskRef} className={`mask ${planetIsChanging ? "animationClass_mask-planet-hide-planet" : ""}`}></div>
            </div>

            {/* PLANET LIST */}
                <div className="destination-planet-list">
                {destinations?.map((destination, index) => (
                    <a onClick={() => startPlanetChangingAnimation(destination.name)} key={index} className={`${destination.name === selectedDestination.name ? "selected" : "unselected"} ${planetIsChanging ? "animationClass_make-disabled" : ""}`}>{destination.name}</a>
                ))}
                </div>

                {/* PLANET NAME */}
                <div className="destination-planet-name-description">
                    <h1 className={`destination-planet-name ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedDestination.name}</h1>
                    {/* PLANET DESCRIPTION */}
                    <p className={`destination-planet-description ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedDestination.description}</p>
                </div>


                {/* SEPARATOR */}
                <div className="destination-separator"></div>

                {/* PLANET INFORMATIONS */}
                <div className="destination-planet-informations">
                    <span className="information">Avg. Distance</span>
                    <span className={`value distance ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedDestination.distance}</span>
                </div>
                <div className="destination-planet-informations">
                    <span className="information">Est. Travel Time</span>
                    <span className={`value travelTime ${planetIsChanging ? "animationClass_opacity-out-in-1000" : ""}`}>{selectedDestination.travelTime}</span>
                </div>
            </main>
    )
    
}