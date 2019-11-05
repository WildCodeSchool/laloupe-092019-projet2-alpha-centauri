import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import About from './About'
import Rentals from './Rentals/Rentals'
import './Footer.css';
import RentalList from './Rentals/RentalList';


class Footer extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(

      <Router>
    <div>
    <footer class="footer">
    <div class="row">
      <div class="help dsk-3 tab-6 mob-6">
        <h4>Help</h4>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div class="myAccount dsk-3 tab-6 mob-6">
        <h4>Account</h4>
        <p>Sign in</p>
        <Link to= "/Rentals"><p>Order status</p></Link>
      </div>
      <div class="aboutUs dsk-3 tab-6 mob-6">
      <h4>About us</h4>
      <Link to="/About"><p>Company</p></Link>
        <p>Support</p>
      </div>
      <div class="social dsk-3 tab-6 mob-6">
        <h4>Social</h4>
        <i class="fab fa-facebook-square"></i>
        <i class="fab fa-twitter-square"></i>
        <i class="fab fa-instagram"></i>
      </div>
    </div>
  </footer>


        <Switch>
          <Route path="/About">
            <About />
            </Route>
            <Route path ="/Rentals" component={RentalList} />
        </Switch>
      </div>
    </Router>
        )
    }
}

export default Footer;