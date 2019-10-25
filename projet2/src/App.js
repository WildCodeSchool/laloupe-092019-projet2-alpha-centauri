import React from 'react';

import Intro from './components/Intro';
import Navbar from './components/Navbar';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';






function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Route path="/" exact component={Intro}/>
    <Route path="/" exact component={SolarSystem}/>
    <Footer/>
    </div>


    </Router>
    );
  }
  
  export default App;
  

