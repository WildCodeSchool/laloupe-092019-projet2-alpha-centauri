import React, { useState, useRef } from "react";
import Chevron from "./Chevron";
import "./Rentals.css";
import DataPicker from "./DatePicker";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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

  function handleInsurance(checked) {
    let checkbox = !props.checkbox;
    let check = { type: "check_checkbox", checkbox: checkbox };
    dispatch(check);

    let insurance = checked ? 1250 : 0;
    let payload = { type: "get_insurance", insurance: insurance };
    dispatch(payload);
  }

  const dispatch = useDispatch();

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
        <div className="centerdiv calendardiv ">
          <DataPicker price={price.price} title={props.title} />
        </div>
        <div className="rowdsk dsk-12 colmob tab-offset-1 ">
        <div className="container_price centerdiv row dsk-8 dsk-offset-1 tab-8 tab-offset-1 ">
          <div className="col dsk-3 tab-3 mrtwo">
            <div className="title_money">Insurance</div>
            <div className="Button_insurance">
              <label class="container">
                <input
                  type="checkbox"
                  checked={props.checkbox ? "checked" : ""}
                  onClick={e => handleInsurance(e.target.checked)}
                />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div className="col dsk-3 tab-2">
            <p className="title_money">Days</p>
            <p className="black price_tag">{props.days} </p>
          </div>

          <div className="col dsk-3 tab-5">
            <div className="title_money">Price</div>
            <div className="black price_tag">{props.total} Buzz </div>
          </div>
          
            </div>
            <div className="dsk-3 marginbut centerdiv container_button">
            <Link to="/Confirmation">
              <button
                type="button"
                className={props.travel ? "button_travelOff" : "button_travel"}
                disabled={props.travel}
              >
                Travel!
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    total: state.total,
    days: state.days,
    checkbox: state.checkbox,
    travel: state.travel
  };
};

export default connect(mapStateToProps)(Accordion);
