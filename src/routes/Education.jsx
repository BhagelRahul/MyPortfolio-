
import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../components/Education.css";
import Educationimage from '../components/Educationimage';
import Cards from "../components/Cards";



function Education() {
    return (
        <div>
            <Navbar />

            <Educationimage heading="EDUCATION." text="This is my Educational journey, But learning never ends.." />
            <Cards />


            <Footer />
        </div>
    )
};

export default Education;
