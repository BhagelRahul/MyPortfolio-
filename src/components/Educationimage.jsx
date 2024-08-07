
import "./Educationimage.css";

import React, { Component } from 'react';

class Educationimage extends Component {
    render() {
        return (
            <div className="edu-img">
                <div className="heading">
                    <h1>{this.props.heading}</h1>
                    <p>{this.props.text}</p>
                </div>

            </div>
        );
    }
}


export default Educationimage;















