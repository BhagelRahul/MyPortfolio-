import React from 'react'
import "../components/Footer.css";
import { FaHome, FaPhone, FaMailBulk, FaWhatsapp, FaLinkedin, FaInstagram, FaGithub, FaFileDownload } from "react-icons/fa";

import { Link } from 'react-router-dom';


function Footer() {


  const handleIconClick = (url) => {
    window.location.href = url;
  };
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Village-Itawali,         Post-Budhansi,<br />
                Aligarh.
              </p>
            </div>
          </div>

          <div className="phone">
            <h4>
              <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              8305965539,7536861853
            </h4>
          </div>

          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <Link to="mailto:rahulkumar753686@gmail.com" target="_blank" >Rahulkumar753686@gmail.com</Link>
            </h4>
          </div>
          <div className="Resume">
            <h4>
              <FaFileDownload size={20} style={{ color: "#fff", marginRight: "2rem" }} />
              <Link to="https://drive.google.com/file/d/1opNKiEuRnu_nuTa1vZXjEG_AepvzExqh/view?usp=drivesdk" target="_blank" >Download Resume</Link>
            </h4>
          </div>
        </div>

        <div className="right">

          <h4>About the Portfolio</h4>
          <p> This is me Rahul Kumar.
            Passionate frontend developer with experience in creating dynamic and responsive web applications using React.js.  Always staying updated with the latest trends and best practices in frontend development.
          </p>
          <div className="social">
            <FaLinkedin size={30} style={{ color: "#fff", marginRight: "2rem" }} onClick={() => handleIconClick('https://www.linkedin.com/in/rahul-kumar-up81?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app')} target="_blank" />

            <FaWhatsapp size={30} style={{ color: "#fff", marginRight: "2rem" }} onClick={() => handleIconClick(' https://api.whatsapp.com/send/?phone=7536861853&text&type=phone_number&app_absent=0 ')} target="_blank" />

            <FaGithub size={30} style={{ color: "#fff", marginRight: "2rem" }} onClick={() => handleIconClick(' https://github.com/BhagelRahul ')} target="_blank" />

            <FaInstagram size={30} style={{ color: "#fff", marginRight: "2rem" }} />


          </div>

        </div>
      </div>
    </div >
  )
}

export default Footer;
