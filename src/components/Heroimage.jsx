import React from 'react';
import "../components/Heroimage.css";
import bg from "../assets/bg.png";
import {Link} from "react-router-dom";

function HeroImage () {
  return (
    <div className='hero'>

        <div className="mask">
         <img className ="into-img" src={bg} alt="bg"/>
        </div>

      <div className="content">
        <p>HI, I'M   RAHUL KUMAR</p>
        <h1>FRONTEND REACT DEVELOPER</h1>
      <div>

        <Link to="/project" className='btn'>Projects</Link>
        <Link to="/contact" className='btn-light'>Contact</Link>
      </div>
    </div>
    </div>
  )
}

export default HeroImage;
