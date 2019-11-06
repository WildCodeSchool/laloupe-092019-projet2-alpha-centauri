import React from 'react';
import Intro from './components/Intro';
import Footer from './components/Footer'
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Mercury from './components/Planets/Mercury';
import Venus from './components/Planets/Venus';
import Mars from './components/Planets/Mars';
import Jupiter from './components/Planets/Jupiter';
import Saturne from './components/Planets/Saturne';
import Uranus from './components/Planets/Uranus';
import Neptune from './components/Planets/Neptune';

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
    <Route path="/Jupiter" component={Jupiter}/>
    <Route path="/Saturne" component={Saturne}/>
    <Route path="/Uranus" component={Uranus}/>
    <Route path="/Neptune" component={Neptune}/>
    <Footer/>
    </div>


    </Router>
    );
  }
  
  export default App;
  

