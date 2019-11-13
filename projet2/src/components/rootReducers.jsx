import {
  GET_NAME,
  GET_DEPARTURE,
  GET_ARRIVAL,
  GET_INSURANCE,
  GET_DAYS,
  GET_TOTAL
} from "./ActionTypes";

const STORE = {
  name: "",
  arrival: "",
  departure: "",
  insurance: 0,
  days: 0,
  total: 0,
};

const rootReducer = (state, action) => {
  let name = STORE.name;
  let arrival = STORE.arrival;
  let departure = STORE.departure;
  let insurance = STORE.insurance;
  let days = STORE.days;
  let total = STORE.total;
console.log(action, 'state')


  switch (action.type) {
    case GET_NAME.type:
      STORE.name = action.name;
      name = action.name;
      break;

    case GET_DEPARTURE.type:
      STORE.departure = action.departure;
      departure = action.departure;
      break;

    case GET_ARRIVAL.type:
      STORE.arrival = action.arrival;
      arrival = action.arrival;
      break;

    case GET_INSURANCE.type :
      STORE.insurance = action.insurance;
      insurance = action.insurance;
      total = total + insurance      
      break;

    case GET_DAYS.type:
      STORE.days = action.days;
      days = action.days ;
      break;

    case GET_TOTAL.type:
      STORE.total = action.total;
      total = action.total;
      break;

    default:
      break;
  }

  return {
    name: name,
    arrival: arrival,
    departure: departure,
    insurance: insurance,
    days: days,
    total: total
  };
};

export default rootReducer;
