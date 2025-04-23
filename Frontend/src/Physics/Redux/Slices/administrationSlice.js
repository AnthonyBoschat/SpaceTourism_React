import { createSlice } from '@reduxjs/toolkit';


export const administrationSlice = createSlice({
  name: 'administration',
  initialState: {
    tabs:[
        {label:"Crew Members", active:true, key:"crews"},
        {label:"Destinations", active:false, key:"destinations"},
        {label:"Technology", active:false, key:"technology"},
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