import React, { Component } from 'react';
import './Intro.css'
class Intro extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return ( 
            <div className="starwars-demo">
            <img src="https://svgshare.com/i/FWY.svg" alt="Star" className="star"/>
            <img src="https://svgshare.com/i/FXj.svg" alt="Wars" className="wars"/>
            <h2 className="byline" id="byline"><span>space Travel Agency</span></h2>
            </div>
            );
        }
    }
    export default Intro;