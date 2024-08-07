
import React from 'react';
import "./Tech.css";


import { FaBootstrap, FaCss3, FaGithub, FaHtml5, FaJava, FaJs, FaReact } from "react-icons/fa";
import mongo from "../assets/MongoDB.png";
import mysql from "../assets/mysql.png";
import intelli from "../assets/intellij.png";
import vscode from "../assets/vscode.png";
import sql from "../assets/sql.png";

function Tech() {
    return (

        <div className="container">
            s
            <div className="language"><h3>Languages :</h3>
                <div className="project">
                    <div className="lang"><FaHtml5 size={40} style={{ color: "red", marginRight: "2rem" }} /> <FaCss3 size={40} style={{ color: "yellow", marginRight: "2rem" }}
                    />HTML5/CSS3</div>
                </div>

                <div className="project">
                    <div className="lang"><FaJs size={40} style={{ color: "#000080", marginRight: "2rem" }} />JavaScript</div>
                </div>

                <div className="project">
                    <div className="lang"><FaJava size={50} style={{ color: "violet", marginRight: "2rem" }} />Java Core</div>
                </div>

                <div className="project">
                    <div className="lang">C Prog.</div>
                </div>

                <div className="project">
                    <div className="lang"><img src={sql} width={50} height={50} style={{ padding: "1px" }} />SQL</div>
                </div>
            </div>


            <div className="language"><h3>Libraries/frameworks :</h3>
                <div className="project">

                    <div className="lang"><FaReact size={40} style={{ color: "#00BFFF", marginRight: "2rem" }} />React & Redux</div>
                </div>

                <div className="project">
                    <div className="lang"><FaBootstrap size={40} style={{ color: "#8A2BE2", marginRight: "2rem" }} />Bootstrap</div>
                </div>
            </div>


            <div className="language"><h3> Developers Tools :</h3>
                <div className="project">
                    <div className="lang"><img src={vscode} width={50} height={50} style={{ padding: "1px" }} />
                        Visual Studio Code</div>
                </div>

                <div className="project">
                    <div className="lang">
                        <img src={intelli} width={50} height={50} style={{ padding: "1px" }} />
                        IntelliJ IDEA</div>
                </div>

                <div className="project">
                    <div className="lang"><FaGithub size={40} style={{ color: "black", marginRight: "2rem" }} />Git/Github</div>
                </div>
            </div>

            <div className="language"><h3>Databases :</h3>
                <div className="project">
                    <div className="lang"><img src={mysql} width={50} height={50} style={{ padding: "1px" }} />
                        MySQL</div>
                </div>

                <div className="project">
                    <div className="lang"><img src={mongo} width={50} height={50} style={{ padding: "1px" }} />
                        MongoDB</div>
                </div>

            </div>

        </div>

    )
}

export default Tech;
