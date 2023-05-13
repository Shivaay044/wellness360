import React, { Dispatch, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchexercise } from "../../redux/phyReducer/actionType";
import { useSelector } from "react-redux";
import exeReducer from "../../redux/phyReducer/exeReducer"

function Exercise() {

    const dispatch :  Dispatch<any> | (() => any)  = useDispatch()

    const {exercise}= useSelector((store:any)=>store.exeReducer)

   

    console.log(exercise)
    return <div></div>

}

export default Exercise;
