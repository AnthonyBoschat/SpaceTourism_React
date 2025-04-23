import { createSlice } from '@reduxjs/toolkit';


export const destinationSlice = createSlice({
  name: 'destination',
  initialState: {
    destinations:null,
    selectedDestination:null,
  },
  reducers: {
    selectDestination:(state,action) => {
        state.selectedDestination = state.destinations.find(destination => destination.name === action.payload)
    },
    setDestinations:(state,action) => {
        state.destinations = action.payload
        state.selectedDestination = action.payload[0]
    },
    setDestination:(state,action) => {
      const index = state.destinations.findIndex(destination => destination.id === action.payload.id)
      if (index !== -1) {
        state.destinations[index] = action.payload
      }
    },
    deleteDestination:(state, action) => {
      state.destinations = state.destinations.filter(destination => destination.id !== action.payload)
    }
  },
});

export const { 
    selectDestination, setDestinations,setDestination, deleteDestination
} = destinationSlice.actions;

export const destinationSliceReducer = destinationSlice.reducer;