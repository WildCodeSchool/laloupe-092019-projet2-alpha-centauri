import React from "react";
import DayPicker, { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./Rentals.css";
import { connect } from "react-redux";

class DataPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
      daytimesup: 0,
      from: undefined,
      to: undefined
    };
    console.log("searching", props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.handleResetClick = this.handleResetClick.bind(this);
    // this.state = this.getInitialState();
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.to !== this.state.to) {
      this.handleChange(this.state.from, this.state.to);
    }
  }

  componentDidMount() {
    this.handleChange();
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  // change le nombre de calendrier en fonction de la taille d'écran
  change = () => {
    if (this.state.width > 670) {
      return 2;
    } else {
      return 1;
    }
  };

  //fait le reset
  getInitialState() {
    return {
      from: undefined,
      to: undefined,
      daytimesup: 0
    };
  }

  // fonction calcul différence de la date

  handleChange = (from, to) => {
    //from et to sont des tableaux d'objet
    // date en format 10/10/2000

    if (
      typeof from !== "undefined" &&
      typeof to !== "undefined" &&
      from !== null &&
      to !== null
    ) {
      from = from.toLocaleDateString();
      to = to.toLocaleDateString();
      console.log("Je dois apparaitre", from);
      // enlève le slash et transforme en tableau
      let fromChange = from.replace(/\//g, " ");
      let tablefrom = fromChange.split(" ");
      let toChange = to.replace(/\//g, " ");
      let tableto = toChange.split(" ");

      //algo pour calculer la diff entre les dates

      const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
      const firstDate = new Date(
        tablefrom[2],
        parseInt(tablefrom[1]),
        parseInt(tablefrom[0])
      );
      const secondDate = new Date(
        tableto[2],
        parseInt(tableto[1]),
        parseInt(tableto[0])
      );
      const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));

      this.setState({ daytimesup: diffDays });

      let departure = from;
      let bye = { type: "get_departure", departure: departure };
      this.props.dispatch(bye);

      let arrival = to;
      let ciao = { type: "get_arrival", arrival: arrival };
      this.props.dispatch(ciao);

      let days = diffDays;
      let nbday = { type: "get_days", days: days };
      this.props.dispatch(nbday);

      let title = this.props.title;
      let tit = { type: "get_title", title: title };
      this.props.dispatch(tit);

      let total = this.props.price * diffDays;
      let totalP = { type: "get_total", total: total };
      this.props.dispatch(totalP);
    }
  };

  handleDayClick(day) {
    const range = DateUtils.addDayToRange(day, this.state);
    this.setState(range);
  }

  handleResetClick() {
    this.setState(this.getInitialState());

    let total = 0;
    let totalP = { type: "get_total", total: total };
    this.props.dispatch(totalP);

  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    console.log(this.state.daytimesup);
    return (
      <div className="">
        <p className="text_date black center">
          {!from && !to && "Please select the first day."}
          {from && !to && "Please select the last day."}
          {from &&
            to &&
            `Renting from ${from.toLocaleDateString()} to
        ${to.toLocaleDateString()}`}

          {from && to && (
            <button className="button4" onClick={this.handleResetClick}>
              Reset
            </button>
          )}
        </p>
        <DayPicker
          className="Selectable"
          numberOfMonths={this.change()}
          selectedDays={[from, { from, to }]}
          modifiers={modifiers}
          onDayClick={this.handleDayClick}
          onChange={
            (() => this.handleChange(from, to), console.log("res", from, to))
          }
        />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    arrival: state.arrival,
    departure: state.departure,
    total: state.total
  };
};

export default connect(mapStateToProps)(DataPicker);
