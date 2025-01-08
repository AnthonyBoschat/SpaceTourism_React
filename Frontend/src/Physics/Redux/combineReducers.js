import { combineReducers } from "@reduxjs/toolkit";
import { destinationSliceReducer } from "./Slices/destinationSlice";

const rootReducer = combineReducers({
    destination:destinationSliceReducer
});

export default rootReducer