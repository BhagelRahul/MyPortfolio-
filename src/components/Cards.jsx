
import React from 'react';
import "./Cards.css";


function Cards() {
    return (


        <div className="project-container">

            <div className="project-cards">

                <h2 className='project-tilte'>Primary Education</h2>
                <div className="pro-details">
                    <h3>G.D.S.M Public School</h3>
                    <p> Harduaganj, Aligarh </p>

                </div>
            </div>
            <div className="project-cards">

                <h2 className='project-tilte'>Secondary Education</h2>
                <div className="pro-details">
                    <h3>Neehar Meera National Sr.Sec School</h3>
                    <p> Aligarh</p>
                    <p> Percentage : 92%</p>
                    <p>April,2015-March,2016</p>

                </div>
            </div>
            <div className="project-cards">

                <h2 className='project-tilte'>Higher Secondary Education </h2>
                <div className="pro-details">
                    <h3>Neehar Meera National Sr.Sec School</h3>
                    <p>Aligarh </p>
                    <p>Percentage: 64%  (PCM)</p>
                    <p>April,2017-March,2018</p>


                </div>

            </div >
            <div className="project-cards">

                <h2 className='project-tilte'>Graduation </h2>
                <div className="pro-details">
                    <h3>Bachelor of Computer Application (BCA)</h3>
                    <p>  D S College Aligarh</p>
                    <p> Percentage: 66% </p>
                    <p>July,2018- June,2021</p>


                </div>

            </div >
            <div className="project-cards">

                <h2 className='project-tilte'>Post Graduation </h2>
                <div className="pro-details">
                    <h3>Master of Computer Application (MCA)</h3>
                    <p> Bundelkhand University </p>
                    <p> Percentage: 75% </p>
                    <p>July,2022-August,2024</p>


                </div>

            </div >
        </div >




    )
};

export default Cards;
