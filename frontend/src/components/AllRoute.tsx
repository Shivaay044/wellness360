


import React from "react";
import { Routes, Route } from "react-router-dom";
import Physical from "../Pages/PhysicalFitness/Physical";
import Exercise from "../Pages/PhysicalFitness/Exercise";
import Mentalhelth from "../Pages/Mentalhelth";

function AllRoute() {
  return <Routes>
    <Route path="/fit" element={<Physical/>}/>
    <Route path="/exe" element={<Exercise/>}/>
    <Route path="/mentalhealth" element={<Mentalhelth/>}/>
  </Routes>
  
  ;
}

export default AllRoute;
