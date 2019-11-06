import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Intro from './components/Intro';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import Mercury from './components/Planets/Mercury';
import Venus from './components/Planets/Venus';
import Mars from './components/Planets/Mars';
import Open from "./components/navbar/Open";
import About from './components/About';
import SignIn from './components/SignIn';
import Table from './components/Table';
import Payment from './components/Payment';

function App() {
  return (
    <div>
<Router>
    <Open/>
    <Switch>
    <Route exact path="/" exact component={Intro}/>
    <Route exact path="/" exact component={SolarSystem}/>
    <Route exact path="/Mercury" exact component={Mercury} />
    <Route exact path="/Venus" exact component={Venus} />
    <Route exact path="/Mars"  exact component={Mars}/>
    <Route exact path="/About" exact component={About} />   
    <Route exact path="/SignIn" exact component={SignIn} />
    <Route exact path="/Table" exact component={Table} />
    <Route exact path="/Payment" exact component={Payment}/>
    </Switch>
    <Footer/>
    </Router>
    </div>
    );
  }
  
  export default App;
  

