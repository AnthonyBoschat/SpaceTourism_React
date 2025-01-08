import { useSelector } from "react-redux"
import "./Destination.scss"

export default function Destination(){

   

    const planets = useSelector(store => store.destination.planets)
    const selectedPlanet = useSelector(store => store.destination.selectedPlanet)


    return(
        <main>
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
                <div className="mask"></div>
            </div>

            {/* PLANET LIST */}
             <div className="destination-planet-list">
                {planets.map((planet, index) => (
                    <a key={index} className={planet.selected ? "selected" : "unselected"}>{planet.name}</a>
                ))}
             </div>

             {/* PLANET NAME */}
              <div className="destination-planet-name-description">
                  <h1 className="destination-planet-name">{selectedPlanet.name}</h1>
                  {/* PLANET DESCRIPTION */}
                  <p className="destination-planet-description">{selectedPlanet.description}</p>
              </div>


              {/* SEPARATOR */}
              <div className="destination-separator"></div>

              {/* PLANET INFORMATIONS */}
                <div className="destination-planet-informations">
                    <span className="information">Avg. Distance</span>
                    <span className="value distance">{selectedPlanet.distance}</span>
                </div>
                <div className="destination-planet-informations">
                    <span className="information">Est. Travel Time</span>
                    <span className="value travelTime">{selectedPlanet.travelTime}</span>
                </div>
         </main>
    )
}