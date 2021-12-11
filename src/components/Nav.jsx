import React from 'react'
import {NavLink} from 'react-router-dom'
import "../css/Navbar.css"


function Nav () {
  return (
<>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">KunalShete</NavLink>
    <button exact className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarNav">
      
    <ul className="navbar-nav ms-auto ">
         
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/">Home</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/About">About</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/Service">Service</NavLink> </li>
         <li className="nav-item"><NavLink exact activeClassName="menu_active" className="nav-link" to="/Contact">Contact</NavLink> </li>
         
         </ul>
    </div>
  </div>
</nav>
</>
  );
}


export default Nav;