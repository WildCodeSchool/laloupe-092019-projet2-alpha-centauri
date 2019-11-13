import {
  GET_TITLE,
  GET_DEPARTURE,
  GET_ARRIVAL,
  GET_INSURANCE,
  GET_DAYS,
  GET_TOTAL,
  CHECK_TRAVEL,
  CHECK_CHECKBOX,
} from "./ActionTypes";

const STORE = {
  title: "",
  arrival: "",
  departure: "",
  insurance: 0,
  days: 0,
  total: 0,
  travel:true,
  checkbox:false,
};

const rootReducer = (state, action) => {
  let title = STORE.title;
  let arrival = STORE.arrival;
  let departure = STORE.departure;
  let insurance = STORE.insurance;
  let days = STORE.days;
  let total = STORE.total;

  let travel = STORE.travel;
  let checkbox = STORE.checkbox;

  switch (action.type) {
    case GET_TITLE.type:
      STORE.title = action.title;
      title = action.title;
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

      case CHECK_TRAVEL.type:
      STORE.travel = action.travel;
      travel = action.travel;
      
      break;

      case CHECK_CHECKBOX.type:
      STORE.checkbox = action.checkbox;
      checkbox = action.checkbox;
      console.log("travel",checkbox)
      break;

      

    default:
      break;
  }

  return {
    title: title,
    arrival: arrival,
    departure: departure,
    insurance: insurance,
    days: days,
    total: total,
    travel:travel,
    checkbox:checkbox,
    
  };
};

export default rootReducer;
