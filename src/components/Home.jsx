import React from 'react'
import Useagain from "./Useagain"
import image from "../img/home.png"



const Home =()=> {
  return (
   <>

<Useagain 
pageinfo="Learn react with"
visit="/Service"
btnname="Lets Start"
imgsrc={image}
/>
</>
  );
}

export default Home;