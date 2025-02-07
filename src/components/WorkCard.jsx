
import React from 'react';
import "./WorkCard.css";
import { NavLink } from 'react-router-dom';

import orderimg from "../assets/orderimg.jpg";
import movie from "../assets/movie.jpg";
import photo from "../assets/photo.png";
import resume from "../assets/resume.png";
import quiz from "../assets/quiz.png";
import todo from "../assets/todo.png";


function WorkCard() {
    return (
        <div className='Work-container'>
            <h1 className="project-heading">Projects</h1>
            <div className="project-container">

                <div className="project-card">
                    <img src={photo} alt="image" width={350} height={300} />
                    <h2 className='project-tilte'>Photography Website</h2>
                    <div className="pro-details">
                        <p> Developed a Photography Website  using the (HTML5, CSS3, Bootstrap).In this website we explores carousal, card,range,map feebback form properties of Bootstrap </p>
                        <div className="pro-btns">
                            <NavLink to="https://bhagelrahul.github.io/website-photographer/" className="btn">View</NavLink>
                            <NavLink to="https://github.com/BhagelRahul/website-photographer" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src={resume} alt="image" width={350} height={300} />
                    <h2 className='project-tilte'>Resume Generator App </h2>
                    <div className="pro-details">
                        <p>Developed a Resume generator App Using HTML5, CSS3, JavaScript.In this app we can also download the resume in pdf form.  </p>
                        <div className="pro-btns">
                            <NavLink to="https://bhagelrahul.github.io/Resume-Generator/" className="btn">View</NavLink>
                            <NavLink to="https://github.com/BhagelRahul/Resume-Generator" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src={quiz} alt="image" width={350} height={300} />
                    <h2 className='project-tilte'>Quiz App</h2>
                    <div className="pro-details">
                        <p>Developed a quiz app using HTML5, CSS3, JavaSCript. In this App you can take a test and it gives final score of your performance. </p>
                        <div className="pro-btns">
                            <NavLink to="https://bhagelrahul.github.io/quiz-time/" className="btn">View</NavLink>
                            <NavLink to="https://github.com/BhagelRahul/quiz-time" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>

                <div className="project-card">
                    <img src={todo} alt="image" width={350} height={300} />
                    <h2 className='project-tilte'>Todo App</h2>
                    <div className="pro-details">
                        <p>developed a todo app using the HTML5, CSS3, JavaScript.in this app we can list the items to do and chcked on completing, cross on unwanted items. </p>
                        <div className="pro-btns">
                            <NavLink to="https://bhagelrahul.github.io/To-do-App/" className="btn">View</NavLink>
                            <NavLink to="https://github.com/BhagelRahul/To-do-App" className="btn">Source</NavLink>

                        </div>
                    </div>
                </div>


            </div>
        </div>

    )
};

export default WorkCard;
