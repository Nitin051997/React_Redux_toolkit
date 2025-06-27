import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from './counterSlice';
import userReducer from './getUser';
import generalStateReducer from "./generalState";
import listOfUserReducer from "./GetMethod/ListOfUsers/listOfUsers";
import singleUserReducer from "./GetMethod/SingleUser/singleUser";
import handleDelayReducer from "./GetMethod/HandleDelay/handleDelay";
import createUserReducer from "./PostMethod/CreateUser/createUser";
import registerUserReducer from "./PostMethod/RegisterUser/registerUser";
import customGetDataReducer from "./Custom/API/customGetData";
import listofemployeesReducer from "../Components/ResetRedux/listofemployees";
import AbortActionReducer from "../Components/AxiosMethos/abortAction";
import marvelapiReducer from "../Components/MarvelApi/marvelapi";

export const transformer = combineReducers({
        counter: counterReducer,
        user: userReducer,
        generalStateReducer: generalStateReducer,
        listOfUserReducer: listOfUserReducer,
        singleUserReducer: singleUserReducer,
        handleDelayReducer: handleDelayReducer,
        createUserReducer: createUserReducer,
        registerUserReducer: registerUserReducer,
        customGetDataReducer: customGetDataReducer,
        listofemployeesReducer: listofemployeesReducer,
        AbortActionReducer: AbortActionReducer,
        marvelapiReducer: marvelapiReducer,
})

export default transformer;