import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {
    let travel = true;
    let trav = { type: "check_travel", travel: travel };
    this.props.dispatch(trav);

    let checkbox = false;
    let check = { type: "check_checkbox", checkbox: checkbox };
    this.props.dispatch(check);

    let days = 0;
    let nbday = { type: "get_days", days: days };
    this.props.dispatch(nbday);

    let total = 0;
    let totalP = { type: "get_total", total: total };
    this.props.dispatch(totalP);
  };

  render() {
    return (
      <div className="divspacerentals">
        <div className="col">
          <h2 className="title_text_confirmation ">Order Confirmation</h2>
          <p className="textright">
            {" "}
            <span className="gold">Order number</span>: #182-164569872-521A23
          </p>
        </div>

        <div className="mbottom ">
          <p className="des_text_confirmation mbottom">Dear customer,</p>
          <p className="des_text_confirmation">
            Thank you for choosing Alpha Centauri, the first space travel agency
            in the entire galaxy! We hope you'll enjoy your trip. You'll be with
            us for <span className="gold">{this.props.days} days</span>. Please
            check the order confirmation below and confirm your order.
          </p>
        </div>

        <div className=" borderblack">
          <h3 className="des_text_confirmation mbottom textcent">
            Confirmation Details
          </h3>
        </div>
<div className="dsk-offset-1">
        <div className="rowdsk centerdiv mbottom  tabcol ">
          <div className="dsk-5 dsk-offset-1">
            <p className="des_text_confirmation ">
              Departure: <span className="gold">{this.props.departure}</span>
            </p>
          </div>
          <div className="dsk-5 dsk-offset-1">
            <p className="des_text_confirmation  ">
              Arrival: <span className="gold">{this.props.arrival}</span>
            </p>
          </div>
        </div>
        <div className="rowdsk centerdiv mbottom tabcol colmob">
          <div className="dsk-5 ">
            <p className="des_text_confirmation">
              You have chosen <span className="gold">{this.props.title}</span>!
            </p>
          </div>

          <div className="dsk-5 dsk-offset-1 ">
            {this.props.checkbox ? (
              <p className="des_text_confirmation_other">
                You have taken an insurance!
              </p>
            ) : (
              <p className="des_text_confirmation_other">
                You didn't take an insurance.
              </p>
            )}
          </div>
        </div>
        <div className="centerdiv mbottom marginr ">
          <p className="des_text_confirmation">
            Total cost: <span className="gold">{this.props.total} Buzz</span>
          </p>
        </div>
        </div>
        <div className="row dsk-12 ">
        <div>
          <Link to="/RentalList">
            <button  className="button_back " onClick={() => this.handleClick()}>Back</button>
          </Link>
          </div>
          <div className="divbutton ">
          <Link to="/Payment">
            <button className="button_buy" >Buy</button>
          </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    arrival: state.arrival,
    departure: state.departure,
    total: state.total,
    title: state.title,
    checkbox: state.checkbox,
    days: state.days
  };
};

export default connect(mapStateToProps)(Confirmation);
