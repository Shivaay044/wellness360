
import React from "react";
import { GET_DATA_FALIURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";

const initialState: exerciseState = {
    exercise:[],
    isLoading:false,
    isError:false
}


function exeReducer(state = initialState, {type, payload}:workoutAction) {
    switch(type){
        case GET_DATA_REQUEST:{
            return {...state,isLoading:true}
        }
        case GET_DATA_SUCCESS:{
            console.log(payload)
            return {...state,isLoading:false,exercise:payload}
        }
        case GET_DATA_FALIURE:{
            return {...state,isLoading:false,isError:true}
        }
        default :{
            return state
        }
       }
}

export default exeReducer;

