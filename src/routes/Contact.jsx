import React from 'react'
import Navbar from '../components/Navbar';
import Heroimage_2 from '../components/Heroimage_2';
import Footer from '../components/Footer';
import Form from "../components/Form";

function Contact()  {
 
  return (
    <div>
     <Navbar/>
     <Heroimage_2 heading="CONTACT." text="Lets have a chat witrh you ..."/>
     <Form/>
     <Footer/>
    </div>
  )
}

export default  Contact;
