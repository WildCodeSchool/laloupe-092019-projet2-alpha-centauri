import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About from './components/About';
import SignIn from './components/SignIn';
import Table from './components/Table';

function App() {
  return (
    <div>
    <Navbar/>
    
    <Router>
    <Switch>
    <div>    
    <Route path="/" exact component={Intro}/>
    <Route path="/" exact component={SolarSystem}/>
    <Route path="/About" component={About}/>   
    <Route path="/SignIn" component={SignIn}/>
    <Route path="/Table" component={Table}/>
    </div>   

    </Switch>
    </Router>
    <Footer/>
    </div>
    );
  }
  
  export default App;
  

