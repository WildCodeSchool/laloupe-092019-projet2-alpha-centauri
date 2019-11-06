
import React, {Component} from 'react';
import Navbar from './Navbar';
import GlobalStyle from '../../styles/Global';


class Open extends Component {
    state = {
      navbarOpen: false
    }
  
    handleNavbar = () => {
      this.setState({ navbarOpen: !this.state.navbarOpen });
    }
  
    render() {
  
      return (
        <>
          <Navbar 
            navbarState={this.state.navbarOpen} 
            handleNavbar={this.handleNavbar}
          />
          <GlobalStyle />
        </>
      )
    }
  }

  export default Open;