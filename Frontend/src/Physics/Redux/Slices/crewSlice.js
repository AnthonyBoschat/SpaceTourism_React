import { createSlice } from '@reduxjs/toolkit';
import douglasImg from "@Assets/Crew/douglasHurley.png"
import markImg from "@Assets/Crew/markShuttleworth.png"
import victorImg from "@Assets/Crew/victorGlover.png"
import anoushehImg from "@Assets/Crew/anoushehAnsari.png"

export const crewSlice = createSlice({
  name: 'crew',
  initialState: {
    crewMembers:null,
    selectedCrewMember:null,
  },
  reducers: {
    selectCrewMember:(state,action) => {
        state.selectedCrewMember = state.crewMembers.find(member => member.name === action.payload)
    },
    setCrews:(state,action) => {
        state.crewMembers = action.payload
        state.selectedCrewMember = action.payload[0]
    }
  },
});

export const { 
    selectCrewMember, setCrews
} = crewSlice.actions;

export const crewSliceReducer = crewSlice.reducer;