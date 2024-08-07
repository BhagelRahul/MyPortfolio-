import React from 'react';
import "./AboutContent.css";
import { Link } from "react-router-dom";
import React1 from "../assets/react1.jpg";
import React2 from "../assets/react2.webp";

function AboutContent() {
  return (
    <div className="about">
      <div className="left">
        <h1>Who AM I ?</h1>
        <p>


          Hello! I'm <b> Rahul Kumar</b>, a passionate frontend developer specializing in <b>React.js.</b>  With a strong educational background in computer applications<b> (MCA, BCA)</b> and a keen eye for design, I thrive on transforming complex problems into intuitive and engaging web solutions.</p>
        <p>
          <b>My Journey , </b>
          From my early days of coding to my advanced studies in computer applications, I have always been fascinated by the intersection of technology and creativity. My education has provided me with a solid foundation in software development, and my experience with React.js has allowed me to build dynamic and responsive web applications that delight users.
        </p>
        <Link to="/contact">
          <button className='btn'>Contact</button></Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={React1} className='img' alt="true" />
          </div>

          <div className="img-stack bottom">
            <img src={React2} className='img' alt="true" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default AboutContent;
