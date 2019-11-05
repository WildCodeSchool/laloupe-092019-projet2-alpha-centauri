import React from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Mercury from './components/Planets/Mercury';
import Venus from './components/Planets/Venus';
import Mars from './components/Planets/Mars';

import Open from "./components/navbar/Open";



function App() {
  return (
    <Router>
    <div>
    <Open/>
    <Route path="/" exact component={Intro}/>
    <Route path="/" exact component={SolarSystem}/>
    <Route path="/Mercury" component={Mercury} />
    <Route path="/Venus"  component={Venus} />
    <Route path="/Mars" component={Mars}/>
    <Footer/>
    </div>


    </Router>
    );
  }
  
  export default App;
  

