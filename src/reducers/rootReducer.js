import { combineReducers } from "redux";
import { activitiesReducer } from "./activitiesReducer";

const rootReducer = combineReducers({ activitiesStore: activitiesReducer });

export default rootReducer;
