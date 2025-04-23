import { createSlice } from '@reduxjs/toolkit';
import launch from "@Assets/Technology/launch.png"
import spaceport from "@Assets/Technology/spaceport.png"
import spacecapsule from "@Assets/Technology/spacecapsule.png"

export const technologySlice = createSlice({
  name: 'technology',
  initialState: {
    technology:null,
    selectedTechnology:null
  },
  reducers: {
    selectTechnology:(state,action) => {
        state.selectedTechnology = state.technology.find(techno => techno.name === action.payload)
    },
    setTechnology:(state, action) => {
        state.technology = action.payload
        state.selectedTechnology = action.payload[0]
    },
    setTechno:(state,action) => {
      const index = state.technology.findIndex(techno => techno.id === action.payload.id)
      if (index !== -1) {
        state.technology[index] = action.payload
      }
    },
    deleteTechno:(state, action) => {
      state.technology = state.technology.filter(techno => techno.id !== action.payload)
    }
  },
});

export const { 
    selectTechnology, setTechnology,setTechno, deleteTechno
} = technologySlice.actions;

export const technologySliceReducer = technologySlice.reducer;