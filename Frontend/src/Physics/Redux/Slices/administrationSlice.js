import Administration_Crews from '@Layout/Administration/Components/Crew';
import Administration_Destinations from '@Layout/Administration/Components/Destinations';
import Administration_Technology from '@Layout/Administration/Components/Technology';
import { createSlice } from '@reduxjs/toolkit';


export const administrationSlice = createSlice({
  name: 'administration',
  initialState: {
    tabs:[
        {label:"Membres du crew", active:true, key:"crews"},
        {label:"Liste des destinations", active:false, key:"destinations"},
        {label:"Liste des technologies", active:false, key:"technology"},
    ]
  },
  reducers: {
    setTab:(state,action) => {
      state.tabs.forEach((tab, index) => {
        tab.active = (index === action.payload)
      })
    }
  },
});

export const { 
  setTab,
} = administrationSlice.actions;

export const administrationSliceReducer = administrationSlice.reducer;