import React from 'react'
import {NavLink} from 'react-router-dom'
import "../css/Navbar.css"


function Navbar() {
  return (
    <>
     
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <NavLink className="navbar-brand  text=info" to="./">KunalShete</NavLink>
   <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto" >
       <ul className="navbar-nav ">
         
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/About">About</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/Service">Service</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/Contact">Contact</NavLink> </li>
         
         </ul>
       
        
      </div>
    </div>
  </div>
</nav> 

    </>
  );
}

export default Navbar;