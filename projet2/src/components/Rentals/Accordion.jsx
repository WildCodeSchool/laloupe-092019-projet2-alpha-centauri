import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Rentals.css";
import DataPicker from "./DatePicker";
import { connect } from "react-redux";
import { useDispatch } from 'react-redux'

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setRotate, setRotateState] = useState("accordion__icon");
  const [setDisableColor, setDisableColorState] = useState("buttonDisable");
  const [price, setprice] = useState(props);

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

  function toggle() {
    setDisableColorState(
      setDisableColor === "active" ? "buttonDisable" : "buttontravel"
    );
  }

  function handleInsurance(checked){
    let insurance = (checked) ? 25000 : 0;
    let payload = { type: 'get_insurance', insurance: insurance  };
    dispatch( payload )
  }

  const dispatch = useDispatch()

  return (
    <div className="accordion__section">
      <button className={`accordion ${setActive}`} onClick={toggleAccordion}>
        <p className="accordion__title">RENT NOW</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#fff"} />
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className="accordion__content"
      >
        <div className="centerdiv">
          <DataPicker price ={price.price}  title ={props.title} />
        </div>
        <div className="container_price row">
          <div className="col">
            <div className="title_money">Insurance</div>
            <div className="Button_insurance">
              <label class="container">
                <input type="checkbox" onClick={(e) => handleInsurance(e.target.checked)}/>
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="col">
            <div className="title_money">Price</div>
            <div className="black price_tag">{props.total} Buzz </div>
          </div>
          <div>
            <button className="button_travel">Travel!</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return ({
      total: state.total
  })
};

export default connect(mapStateToProps)(Accordion)
