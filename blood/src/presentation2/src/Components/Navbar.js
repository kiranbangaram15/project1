import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    
        <nav className="navbar navbar-expand-md justify-content-center bg-dark navbar-dark">
            <div class="container-fluid">
                
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" class="nav-link active">Home</Link>
                </li>

                <li className="nav-item">
                    <Link to="/About" class="nav-link ">About</Link>
                </li>
                <li className="nav-item">
                    <Link to="/menu" class="nav-link">Registration</Link>
                </li>

             
                <li className="nav-item">
                    <Link to="/Request" class="nav-link">Request</Link>
                </li>
              
            </ul>
        </div>
        </nav>
   
    </>
  )
}

export default Navbar;