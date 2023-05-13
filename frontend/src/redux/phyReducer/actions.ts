import { GET_DATA_FALIURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./actionType"


export const getDataRequestsObj = () =>{
    return {type:GET_DATA_REQUEST}
}

export const getDataSuccessObj = (payload:pay|exerciseState) =>{
    return {type:GET_DATA_SUCCESS,payload}
}

export const getDataFaliureObj = () =>{
    return {type:GET_DATA_FALIURE}
}