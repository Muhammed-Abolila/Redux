import { combineReducers } from "redux";
import CounterReducer from "./CounteReducer";
import DetailsReducer from "./DetailsReducer";
import UserReducers from "./UserReducers";
export const AllReducers=combineReducers({
    CounterReducer,
    DetailsReducer,
    UserReducers
})