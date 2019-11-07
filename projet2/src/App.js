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

import {NavLink} from 'react-router-dom';
import About from './components/About';
import SignIn from './components/SignIn';
import Table from './components/Table';
import Payment from './components/Payment';




function App() {
  return (
    <div>

    <Open/>
    <Route path="/" exact component={Intro}/>
    <Route path="/" exact component={SolarSystem}/>
    <Route path="/Mercury" component={Mercury} />
    <Route path="/Venus"  component={Venus} />
    <Route path="/Mars" component={Mars}/>
    <Footer/>
    </div>

    <Navbar/>
    
    <Router>
    <Switch>
     <div> 
    <Route path="/" exact component={Intro} />
    <Route path="/" exact component={SolarSystem} />
    <Route path="/About" component={About} />   
    <Route path="/SignIn" component={SignIn} />
    <Route path="/Table" component={Table} />
    <Route path="/Payment" component={Payment}/>
      
     </div> 

    </Switch>
    </Router>


    <Footer/>

    </div>
    );
  }
  
  export default App;
  

