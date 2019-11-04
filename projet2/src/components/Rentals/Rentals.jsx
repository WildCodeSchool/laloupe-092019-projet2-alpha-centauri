import React, { useState, useRef, Component } from "react";
import RentalList from "./RentalList";

import Accordion from './Accordion'
import "./Rentals.css";
import "./../mediaQueries.css";


class Rentals extends Component {
constructor(props) {
    super(props);
    this.state = {
    };


    
}
  render() {
    return (
      <div className="divspacerentals col">
        <div className="des-container row">
          <div className="dsk-4">
            <img
              className="image_resize"
              src="https://via.placeholder.com/150C/O "
              alt=""
            />
          </div>
          <div className="des-text col">
            <div>
              <p>{this.props.title}</p>
            </div>
            <div>
              <p>{this.props.description}</p>
            </div>
          </div>
        </div>

      
      <div><Accordion/></div>

      


      </div>
    );
  }
}

export default Rentals;
