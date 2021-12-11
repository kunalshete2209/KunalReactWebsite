import React from 'react'
import { NavLink } from 'react-router-dom';
import webdevimg from "../img/webdevimg.png"
import appdevimg from "../img/app devlopment serimg.png"
import softdevimg from '../img/software development serimg.png'



const Serviceinfo = (props) => {

    return (
        <>
            <h1 className="container1 my-5"> <strong>Welcome yo services Page </strong></h1>

            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="card">
                            <img src={webdevimg} className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">Web Development</h5>
                            <p className ="card-text">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate pariatur quam nesciunt totam laudantium quas aliquid exercitationem ullam voluptas quasi placeat accusantium, veniam hic illo dolores qui nostrum voluptatum?</p>
                           <div className="btn1"><NavLink to="#" className ="btn btn-primary " >More Info</NavLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={appdevimg} className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">App Development</h5>
                            <p className ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, architecto excepturi! Distinctio obcaecati dolor architecto perspiciatis esse minima nihil aliquam harum! Iusto voluptas similique magni obcaecati a necessitatibus nostrum aliquam?</p>
                            <div className="btn1"><NavLink to="#" className ="btn btn-primary " >More Info</NavLink></div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src={softdevimg} className="card-img-top" alt="..." height="200px" />
                            <div className ="card-body">
                            <h5 className ="card-title">Software Development</h5>
                            <p className ="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus molestias accusantium impedit quisquam repellendus, ad, maxime sit eum est fugiat, deleniti nam totam possimus asperiores ducimus assumenda? Earum, doloremque aut?</p>
                            <div className="btn1"><NavLink to="#" className ="btn btn-primary " >More Info</NavLink></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Serviceinfo;