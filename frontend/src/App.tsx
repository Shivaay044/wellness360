
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Physical from './Pages/PhysicalFitness/Physical';
import Exercise from './Pages/PhysicalFitness/Exercise';
import AllRoute from './components/AllRoute';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ChakraNav from './components/ChakraNav';
import Mentalhelth from './Pages/Mentalhelth';



function App() {
  return (
    <div className="App">
      <ChakraNav/>
      <AllRoute/>
    <Mentalhelth/>
  </div> )

}

export default App;
