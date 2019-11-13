import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Confirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick = () => {

	let travel= true
    let trav = { type: "check_travel", travel:travel};
    this.props.dispatch(trav);

    let checkbox = false
    let check = {type: 'check_checkbox', checkbox:checkbox};
	this.props.dispatch(check)
	
	let days = 0;
      let nbday = { type: "get_days", days: days };
	  this.props.dispatch(nbday);
	  
	  let total = 0;
      let totalP = { type: "get_total", total: total };
      this.props.dispatch(totalP);
	
  }

  render() {
    return (
      <div className="divspacerentals">
        <div className="col">
          <h2>Order confirmation</h2>
          <p>Order #182-164569872-521A23</p>
        </div>

        <div>
          <p>Dear customer,</p>
          <p>
            Thank you for choosing Alpha Centauri! We hope you'll enjoy your
            trip. You'll be with us for <span>{this.props.days} days</span>
          </p>
          . Please check the order confirmation below and confirm your order.
        </div>

        <div>
          <h3>Confirmation details</h3>
        </div>

        <div className="row">
          <div>
            <p>
              departure: <span>{this.props.departure}</span>
            </p>
          </div>
          <div>
            <p>
              arrival: <span>{this.props.arrival}</span>
            </p>
          </div>
        </div>

        <div>
          <p>You have chosen {this.props.title}</p>
        </div>

        <div>
          {this.props.checkbox
            ? "You have taken an insurance!"
            : "You didn't take an insurance"}
        </div>

        <div>
          <p>Total cost: {this.props.total} Buzz</p>
        </div>

        <div className="row">
          <Link to="/RentalList">
            <button onClick={() => this.handleClick()}>Back</button>
          </Link>

          <Link to="/Payment">
            <button>Buy</button>
          </Link>
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
