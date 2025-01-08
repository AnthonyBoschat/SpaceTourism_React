import { createSlice } from '@reduxjs/toolkit';
import launch from "@Assets/Technology/launch.png"
import spaceport from "@Assets/Technology/spaceport.png"
import spacecapsule from "@Assets/Technology/spacecapsule.png"

export const technologySlice = createSlice({
  name: 'technology',
  initialState: {
    technology:[
        {
            name:"Launch Vehicle",
            presentation:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
            image:launch,
    
        },
        {
            name:"Spaceport",
            presentation:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
            image:spaceport,
    
        },
        {
            name:"Space Capsule",
            presentation:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
            image:spacecapsule,
    
        },
    ],
    selectedTechnology:{
        name:"Launch Vehicle",
        presentation:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
        image:launch,
    }
  },
  reducers: {
    selectTechnology:(state,action) => {
        state.selectedTechnology = state.technology.find(techno => techno.name === action.payload)
    }
  },
});

export const { 
    selectTechnology,
} = technologySlice.actions;

export const technologySliceReducer = technologySlice.reducer;