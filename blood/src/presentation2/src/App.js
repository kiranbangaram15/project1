import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./Components/About";
import Home from './Components/Home';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Menu from  './Components/Menu';
import Request from  './Components/Request';

function App() {
  return (
    <>
     <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/Request" element={<Request/>}/>
     </Routes>
     </BrowserRouter>
    </>
  );
}
export default App;