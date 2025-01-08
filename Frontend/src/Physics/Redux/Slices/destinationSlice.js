import { createSlice } from '@reduxjs/toolkit';
import moon from "@Assets/Image/moon.png"
import mars from "@Assets/Image/mars.png"
import europa from "@Assets/Image/europa.png"
import titan from "@Assets/Image/titan.png"


export const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    planets:[
        {
            name:"moon",
            image:moon,
            description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
            distance:"384,400 km",
            travelTime:"3 days",
        },
        {
            name:"mars",
            image:mars,
            description:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
            distance:"225 Mil. Km",
            travelTime:"9 months",
        },
        {
            name:"europa",
            image:europa,
            description:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
            distance:"628 mil. km",
            travelTime:"3 years",
        },
        {
            name:"titan",
            image:titan,
            description:"The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
            distance:"1.6 Bil. KM",
            travelTime:"7 years",
        },
    
    ],
    selectedPlanet:{
        name:"moon",
        image:moon,
        description:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance:"384,400 km",
        travelTime:"3 days",
    },
  },
  reducers: {
    selectPlanet:(state,action) => {
        state.selectedPlanet = state.planets.find(planet => planet.name === action.payload)
    }
  },
});

export const { 
    selectPlanet,
} = destinationSlice.actions;

export const destinationSliceReducer = destinationSlice.reducer;