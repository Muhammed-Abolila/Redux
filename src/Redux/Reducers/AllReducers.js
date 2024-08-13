import { combineReducers } from "redux";
import CounterReducer from "./CounteReducer";
import DetailsReducer from "./DetailsReducer";
export const AllReducers=combineReducers({
    CounterReducer,
    DetailsReducer,
})