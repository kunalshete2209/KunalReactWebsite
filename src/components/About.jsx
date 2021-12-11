import React from 'react'
import Useagain from './Useagain'
import aboutimg from '../img/Abouut.png'




function About() {
  return (
    <>

<Useagain 
pageinfo="Welcome to about page "
visit="/Contact"
btnname="Contact Us"
imgsrc={aboutimg}
/>
    </>
  );
}

export default About;