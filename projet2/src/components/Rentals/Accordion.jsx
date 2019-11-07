import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import './Rentals.css'
import DataPicker from './DatePicker' 
import ButtonInsurance from './ButtonInsurance'



function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setDisableColor, setDisableColorState] = useState("buttonDisable")
  const [price, setprice] = useState(props)

  const content = useRef(null);

  

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordion__icon" : "accordion__icon rotate"
    );
  }

  function toggle () {setDisableColorState(setDisableColor === "active" ? "buttonDisable" : "buttontravel")}
  
  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">RENT NOW</p>
        <Chevron  className={`${setRotate}`} width={10} fill={"#fff"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >

        <div className="centerdiv">
      <DataPicker/>
        </div>

    <div className="container_price row">
        <div className="col">
        <div className="title_money">Insurance</div>
        <div className="Button_insurance"><ButtonInsurance/></div>
        </div>
        <div className="col">
          <div className="title_money">Price</div>
          <div className="black price_tag">{price.price} Buzz </div>
        </div>

        <div><button className="button_travel">Travel!</button></div>
        </div>
      </div>
    </div>
  );
}

export default Accordion;