import React from 'react'
import WorkCard from '../components/WorkCard';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Heroimage_2 from '../components/Heroimage_2';



function Project() {

  return (
    <div>
      <Navbar />
      <Heroimage_2 heading="PROJECTS." text="Some of my most recent works and will continue to add new projects... " />
      <WorkCard />

      <Footer />
    </div>
  )
}

export default Project;

