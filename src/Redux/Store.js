import { applyMiddleware, createStore } from "redux";
import { thunk } from "redux-thunk";
import { AllReducers } from "./Reducers/AllReducers";
export let store=createStore(AllReducers,applyMiddleware(thunk));
