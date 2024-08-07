import React from 'react';

import Educationimage from '../components/Educationimage';
import Tech from '../components/Tech';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Skills.css";

function Skills() {
    return (
        <div>
            <Navbar />
            <Educationimage heading="Skills and Technologies." text="This is my few skills that i learned, and learning new things  continuously..." />
            <Tech />
            <Footer />
        </div>
    )
}

export default Skills;



