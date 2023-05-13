import axios, {AxiosResponse} from "axios"
import { Dispatch } from "react";
import { getDataFaliureObj, getDataRequestsObj, getDataSuccessObj } from "./actions";



export const GET_DATA_REQUEST:string = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS:string = "GET_DATA_SUCCESS"
export const GET_DATA_FALIURE:string = "GET_DATA_FALIURE"








const options = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': 'a12190210cmsh957644e9a9a4f47p145e1fjsn204448a1f995',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export  const fetch = async(dispatch:any) =>{
    dispatch(getDataRequestsObj())
    try {
        const response : AxiosResponse<workout>  = await axios.request(options);
        dispatch(getDataSuccessObj(response.data))
    } catch (error) {
        console.error(error);
        dispatch(getDataFaliureObj())
    }
}





export  const fetchexercise = (el:string = "cardio") => async(dispatch:any) =>{
  console.log("hello")
  dispatch(getDataRequestsObj())
  try {
      const response : AxiosResponse<workout>  = await axios.get(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${el}`,{
        headers: {
          'X-RapidAPI-Key': 'a12190210cmsh957644e9a9a4f47p145e1fjsn204448a1f995',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
      });
      console.log(response)
      dispatch(getDataSuccessObj(response.data))
  } catch (error) {
      console.error(error);
      dispatch(getDataFaliureObj())
  }
}
