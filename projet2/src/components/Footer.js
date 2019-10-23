import React, {Component} from 'react';

import './Footer.css';


class Footer extends Component{
    constructor(props){
        super(props);
        this.state={ }
    }
    render(){
        return(
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
        <p>Order status</p>
      </div>
      <div class="aboutUs dsk-3 tab-6 mob-6">
        <h4>About us</h4>
        <p>Company</p>
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
  </div>
        )
    }
}

export default Footer;