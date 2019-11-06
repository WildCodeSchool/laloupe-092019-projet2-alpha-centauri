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
    <div>
    <footer className="footer">
    <div className="row">
      <div className="help dsk-3 tab-6 mob-6">
        <h4>Help</h4>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div className="myAccount dsk-3 tab-6 mob-6">
        <h4>Account</h4>
        <p>Sign in</p>
        <p>Order status</p>
      </div>
      <div className="aboutUs dsk-3 tab-6 mob-6">
      <h4>About us</h4>
      <Link to="/About"><p>Company</p></Link>
        <p>Support</p>

     <Router>
    <footer class="footer">
    <div class="row">
      <div class="help dsk-offset-2 dsk-3 tab-6 mob-6">
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
      <div className="social dsk-3 tab-6 mob-6">
        <h4>Social</h4>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter-square"></i>
        <i className="fab fa-instagram"></i>
      </div>
    </div>
  </footer>
  </Router>         
     
    
        )
    }
}

export default Footer;