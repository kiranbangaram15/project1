// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
// <div>
import React from 'react';
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Navbar from './Pages/Navbar';
function App(){
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route element={<Home/>} path="/Home" />
      <Route element={<About/>} path="/About" />
      <Route element={<Contact/>} path="/Contact" />
    
      

      
    </Routes>
    </BrowserRouter>
    
    </>
  
  //</div>//
  );
};

export default App;
