import { createSlice } from '@reduxjs/toolkit';

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
    },
    setMemberCrew:(state,action) => {
      const index = state.crewMembers.findIndex(member => member.id === action.payload.id)
      if (index !== -1) {
        state.crewMembers[index] = action.payload
      }
    }
  },
});

export const { 
    selectCrewMember, setCrews, setMemberCrew
} = crewSlice.actions;

export const crewSliceReducer = crewSlice.reducer;