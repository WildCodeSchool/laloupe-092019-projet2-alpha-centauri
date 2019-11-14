import React from 'react';
import Footer from './components/Footer'
import Rentals from './components/Rentals/Rentals'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import RentalList from "./components/Rentals/RentalList";
import Open from "./components/navbar/Open";
import Mercury from './components/Planets/Mercury';
import Venus from './components/Planets/Venus';
import Mars from './components/Planets/Mars';
import Jupiter from './components/Planets/Jupiter';
import Saturne from './components/Planets/Saturne';
import Uranus from './components/Planets/Uranus';
import Neptune from './components/Planets/Neptune';
import About from './components/About';

import Imgday from './components/Imgday';
import SignIn from './components/SignIn';
import Table from './components/Table';
import Payment from './components/Payment';
import './resetCss.css';


function App() {
  return (
    <div>
<Router>
    <Open/>

    <Switch>

    <Route exact path="/" exact component={SolarSystem}/>

    <Route exact path="/Mercury"exact component={Mercury} />
    <Route exact path="/Venus" exact component={Venus} />
    <Route exact path="/Mars" exact component={Mars}/>
    <Route path="/Jupiter" component={Jupiter}/>
    <Route path="/Saturne" component={Saturne}/>
    <Route path="/Uranus" component={Uranus}/>
    <Route path="/Neptune" component={Neptune}/>

    <Route exact path="/About" exact component={About} /> 
    <Route exact path="/RentalList" exact component ={RentalList} />

    <Route exact path="/SignIn" exact component={SignIn} />
    <Route exact path="/Table" exact component={Table} />
    <Route exact path="/Payment" exact component={Payment}/>
    <Route exact path="/Imgday" exact component={Imgday}/>

    </Switch>
    <Footer/>
    </Router>
  

    </div>
    );
  }
  
  export default App;
  

