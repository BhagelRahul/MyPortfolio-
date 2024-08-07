import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage_2 from '../components/Heroimage_2';
import AboutContent from '../components/AboutContent';

function About (){
 
  return (
    <div>
      <Navbar/>
      <Heroimage_2 heading="ABOUT." text="I am a  user friendly Front-End Developer."/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About; 
