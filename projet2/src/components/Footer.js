import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import About from './About'
import Rentals from './Rentals/Rentals'
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

     
          <footer class="footer">
          <div class="row">
            <div class="myAccount dsk-offset-2 tab-offset-1 mob-offset-1tab-5 mob-6">
              <ul>
              <li><NavLink activeClassName="active" to="/SignIn">Sign in</NavLink></li>
              <li><NavLink activeClassName="active" to="/Table" >Order status</NavLink></li>
              </ul>
            </div>
            <div class="aboutUs dsk-offset-3 tab-5 mob-6">
              <ul>
              <li><NavLink activeClassName="active" to="/About"><p>Company</p></NavLink></li>
              <li><NavLink activeClassName="active" to="/Portfolio">Portfolio</NavLink></li>
              </ul>
              
            </div>
            <div class="social dsk-offset-3 tab-5 mob-6">
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