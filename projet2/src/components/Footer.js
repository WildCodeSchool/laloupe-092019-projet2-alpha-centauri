import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import './Footer.css';
class Footer extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
    <footer class="footer">
    <div class="row">
      <div class="help dsk-offset-2 dsk-3 tab-6 mob-6">
        <ul>Help</ul>
        <li>FAQ</li>
        <li>Contact</li>
      </div>
      <div class="myAccount dsk-3 tab-6 mob-6">
        <ul>Account</ul>
        <li><NavLink activeClassName="active" exact to="/SignIn">Sign in</NavLink></li>
        <li><NavLink activeClassName="active" exact to="/Table" >Order status</NavLink></li>
      </div>
      <div class="aboutUs dsk-3 tab-6 mob-6">
        <ul>About us</ul>
        <li><NavLink activeClassName="active" exact to="/About"><p>Company</p></NavLink></li>
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
        )
    }
}

export default Footer;