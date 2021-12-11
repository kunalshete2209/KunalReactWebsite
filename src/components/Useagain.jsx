import React from 'react'
import { NavLink } from 'react-router-dom';
import image from "../img/home.png"


const Useagain =(props)=>{

    return(
<>
<section id="header" className="d-flex align-items-center">
    <div className="container-fluid">
        <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                 <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-2 d-felx justify-content-center flex-column">
                    <h1 className="heading1">{props.pageinfo}<strong className="brand-name"> Kunal </strong> </h1>
                    <h3 className="my-3">We are here to learn web dev and to enjoy the process of learning</h3>
                    <div> <NavLink to={props.visit} className="btn-get-started">
                        <button type="button" className="btn btn-outline-info">{props.btnname}

                        
                        </button>
                         </NavLink>
                    </div>

                 </div>

                 <div className="col-lg-6 order-1 order-lg-2 header-img">
                     <img src={props.imgsrc} className="img-fluid-animated" alt="home img"></img>
                 </div>
              </div>   
            </div> 
        </div>
    </div>
</section>


</>
    );
}

export default Useagain;