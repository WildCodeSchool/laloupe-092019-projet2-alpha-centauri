import React, { useState, useRef, Component } from "react";
import Accordion from './Accordion'
import "./Rentals.css";

class Rentals extends Component {
constructor(props) {
    super(props);
    this.state = {
    };    
}
  render() {
    const {title, price, description, image} = this.props
    return (
      <div className="divspacerentals col">
        <div className="container_des_img des-container rowdsk ">
          <div className="dsk-4 ">
            <img
              className="image_resize"
              src={image}
              alt="Space"
            />
          </div>
          <div className="des-text col dsk-offset-1 dsk-7">
            <div>
              <p className="title_text">{title}</p>
            </div>
            <div>
              <p className='des_text'>{description}</p>
            </div>
          </div>
        </div>

      
      <div><Accordion price={price}/></div>
      </div>
    );
  }
}

export default Rentals;
