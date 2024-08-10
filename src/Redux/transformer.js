import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import userReducer from './getUser';
import generalStateReducer from "./generalState";
import listOfUserReducer from "./GetMethod/ListOfUsers/listOfUsers";

export const transformer = combineReducers({
        counter: counterReducer,
        user: userReducer,
        generalStateReducer: generalStateReducer,
        listOfUserReducer: listOfUserReducer,
})

export default transformer;