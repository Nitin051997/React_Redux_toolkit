import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import userReducer from './getUser';
import generalStateReducer from "./generalState";
import listOfUserReducer from "./GetMethod/ListOfUsers/listOfUsers";
import singleUserReducer from "./GetMethod/SingleUser/singleUser";
import handleDelayReducer from "./GetMethod/HandleDelay/handleDelay";

export const transformer = combineReducers({
        counter: counterReducer,
        user: userReducer,
        generalStateReducer: generalStateReducer,
        listOfUserReducer: listOfUserReducer,
        singleUserReducer: singleUserReducer,
        handleDelayReducer: handleDelayReducer,
})

export default transformer;