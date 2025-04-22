import { createSlice } from '@reduxjs/toolkit';
import moon from "@Assets/Image/moon.png"
import mars from "@Assets/Image/mars.png"
import europa from "@Assets/Image/europa.png"
import titan from "@Assets/Image/titan.png"


export const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    planets:null,
    selectedPlanet:null,
  },
  reducers: {
    selectPlanet:(state,action) => {
        state.selectedPlanet = state.planets.find(planet => planet.name === action.payload)
    },
    setPlanets:(state,action) => {
        state.planets = action.payload
        state.selectedPlanet = action.payload[0]
    }
  },
});

export const { 
    selectPlanet, setPlanets
} = destinationSlice.actions;

export const destinationSliceReducer = destinationSlice.reducer;