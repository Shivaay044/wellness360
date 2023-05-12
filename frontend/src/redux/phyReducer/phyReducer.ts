import React from "react";
import { GET_DATA_FALIURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType";


const initialState: workoutState = {
    workout:[],
    isLoading:false,
    isError:false
}


function phyReducer(state = initialState, {type, payload}:workoutAction) {
   switch(type){
    case GET_DATA_REQUEST:{
        return {...state,isLoading:true}
    }
    case GET_DATA_SUCCESS:{
        return {...state,isLoading:false,workout:payload}
    }
    case GET_DATA_FALIURE:{
        return {...state,isLoading:false,isError:true}
    }
    default :{
        return state
    }
   }
}

export default phyReducer;
