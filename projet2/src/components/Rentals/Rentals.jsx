import React, {  Component } from "react";
import Accordion from './Accordion'
import "./Rentals.css";
import { connect } from 'react-redux';

class Rentals extends Component {
constructor(props) {
    super(props);
    this.state = {
    };    
    console.log("there",props)
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
              <p className="title_text">{price} Buzz </p>
            </div>
            <div>
              <p className='des_text'>{description}</p>
            </div>
          </div>
        </div>

      
      <div><Accordion title={title} price={price}/></div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
      total:state.total
  })
};


export default  connect(mapStateToProps)(Rentals)
