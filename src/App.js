import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from "./components/Home.jsx"
import Service from "./components/Service.jsx"
import Nav from "./components/Nav.jsx"
import Navbar from "./components/Navbar.jsx"
import Contact from "./components/Contact.jsx"
import About from "./components/About.jsx"
import { Switch , Route , Redirect} from 'react-router-dom'



import './App.css';

function App(){
  return (
    <>

      <Nav/>
        <Switch>

          <Route exact path="/" component={Home}/>
          <Route exact path="/about" component={About} />
          <Route exact path="/service" component={Service} />
          <Route exact path="/contact" component={Contact} />
          <Redirect to="/" />
        
        </Switch>
    
    </>
  );
}

export default App;