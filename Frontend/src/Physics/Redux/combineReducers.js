import { combineReducers } from "@reduxjs/toolkit";
import { destinationSliceReducer } from "./Slices/destinationSlice";
import { crewSliceReducer } from "./Slices/crewSlice";
import { technologySliceReducer } from "./Slices/technologySlice";

const rootReducer = combineReducers({
    destination:destinationSliceReducer,
    crew:crewSliceReducer,
    technology:technologySliceReducer
});

export default rootReducer