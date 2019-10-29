import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About from './About'
import './Footer.css';
import Table from './Table';
import SignIn from './SignIn';


class Footer extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(

     <Router>
    <footer class="footer">
    <div class="row">
      <div class="help dsk-3 tab-6 mob-6">
        <ul>Help</ul>
        <li>FAQ</li>
        <li>Contact</li>
      </div>
      <div class="myAccount dsk-3 tab-6 mob-6">
        <ul>Account</ul>
        <li><NavLink activeClassName="active" to="/SignIn">Sign in</NavLink></li>
        <li><NavLink activeClassName="active" to="/Table" >Order status</NavLink></li>
      </div>
      <div class="aboutUs dsk-3 tab-6 mob-6">
        <ul>About us</ul>
        <li><NavLink activeClassName="active" to="/About"><p>Company</p></NavLink></li>
        <li>Support</li>
      </div>
      <div class="social dsk-3 tab-6 mob-6">
        <h4>Social</h4>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  </footer>
  </Router>         
     
    
        )
    }
}

export default Footer;