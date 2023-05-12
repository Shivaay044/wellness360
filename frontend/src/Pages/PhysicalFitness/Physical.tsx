import axios from "axios";
import React, { useEffect,useState } from "react";
import { useDispatch } from "react-redux";
import { Dispatch } from "redux"
import { fetch, fetchexercise } from "../../redux/phyReducer/actionType";
import { useSelector } from "react-redux";
import phyReducer from "../../redux/phyReducer/phyReducer";
import "./Phyical.css"
import {useNavigate} from "react-router-dom"


function Physical() {
   
    const dispatch: Dispatch<any> | (() => any) = useDispatch()
    const navigate = useNavigate()

    const {workout} = useSelector((store:any)=>store.phyReducer)

      useEffect(()=>{
       dispatch(fetch)
      },[])

    console.log(workout)

    const handleClick = (el:string) =>{
      dispatch(fetchexercise(el))
      navigate("/exe")
    }

  return <div className="phy-main">
    <h1 className="phy-heading">Welcome to virtual Gym we will Happy to Help you!!</h1>
   <div className="phy-women-chr">
   <img src="https://i.graphicmama.com/uploads/2019/4/5cb4989c2da3d-cute-fitness-woman-cartoon-vector-character-1.png"/>
   <div>
     {
        workout.map((el:string)=>(
            <button onClick={()=>handleClick(el)}>{el}</button>
        ))
     }
   </div>
   </div>
  </div>;
}

export default Physical;
