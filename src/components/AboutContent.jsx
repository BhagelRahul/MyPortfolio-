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


          Hello! I'm <b> Rahul Kumar</b>, I am a passionate <b>Android developer </b>with hands-on experience in Kotlin, Java, and Android SDK, eager to build dynamic and user-friendly mobile applications. Skilled in implementing MVVM architecture, Firebase integration, Retrofit for REST API, and handling JSON data, I focus on delivering smooth, efficient app experiences. With knowledge of coroutines for seamless background processing, I am committed to staying updated with the latest trends and best practices in Android development.

        </p>
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
