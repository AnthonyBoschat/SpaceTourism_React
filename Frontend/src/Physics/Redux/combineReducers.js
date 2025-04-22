import { combineReducers } from "@reduxjs/toolkit";
import { destinationSliceReducer } from "./Slices/destinationSlice";
import { crewSliceReducer } from "./Slices/crewSlice";
import { technologySliceReducer } from "./Slices/technologySlice";
import { administrationSliceReducer } from "./Slices/administrationSlice";

const rootReducer = combineReducers({
    destination:destinationSliceReducer,
    crew:crewSliceReducer,
    technology:technologySliceReducer,
    administration:administrationSliceReducer
});

export default rootReducer