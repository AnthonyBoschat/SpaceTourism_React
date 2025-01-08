import { combineReducers } from "@reduxjs/toolkit";
import { destinationSliceReducer } from "./Slices/destinationSlice";
import { crewSliceReducer } from "./Slices/crewSlice";

const rootReducer = combineReducers({
    destination:destinationSliceReducer,
    crew:crewSliceReducer
});

export default rootReducer