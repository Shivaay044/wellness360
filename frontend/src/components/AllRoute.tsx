


import React from "react";
import { Routes, Route } from "react-router-dom";
import Physical from "../Pages/PhysicalFitness/Physical";
import Exercise from "../Pages/PhysicalFitness/Exercise";

function AllRoute() {
  return <Routes>
    <Route path="/fit" element={<Physical/>}/>
    <Route path="/exe" element={<Exercise/>}/>
  </Routes>
  
  ;
}

export default AllRoute;
