import React from 'react';

import Intro from './components/Intro';

import Navbar from './components/Navbar';
import Footer from './components/Footer'
<<<<<<< Updated upstream
import SolarSystem from './components/SolarSystem';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import About from './components/About';
import Contact_Form from './components/Contact_Form';
import Table from './components/Table';
=======
import './src/index.css';
>>>>>>> Stashed changes

function App() {
  return (
    <Router>
    <div>
    <Navbar/>
    <Route path="/" exact component={Intro}/>
    <Route path="/" exact component={SolarSystem}/>
    <Footer/>
    <Contact_Form/>
    <Table/>
    </div>


    </Router>
    );
  }
  
  export default App;
  

