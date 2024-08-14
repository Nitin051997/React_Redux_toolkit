import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import userReducer from './getUser';
import generalStateReducer from "./generalState";
import listOfUserReducer from "./GetMethod/ListOfUsers/listOfUsers";
import singleUserReducer from "./GetMethod/SingleUser/singleUser";
import handleDelayReducer from "./GetMethod/HandleDelay/handleDelay";
import createUserReducer from "./PostMethod/CreateUser/createUser";
import registerUserReducer from "./PostMethod/RegisterUser/registerUser";

export const transformer = combineReducers({
        counter: counterReducer,
        user: userReducer,
        generalStateReducer: generalStateReducer,
        listOfUserReducer: listOfUserReducer,
        singleUserReducer: singleUserReducer,
        handleDelayReducer: handleDelayReducer,
        createUserReducer: createUserReducer,
        registerUserReducer: registerUserReducer,
})

export default transformer;