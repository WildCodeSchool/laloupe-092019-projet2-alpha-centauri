import React from 'react';
import './contactForm.css';

class Contact_Form extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        firstName :'',
        lastName :'',
        email :'',
        password :''
  };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
  }
  handleChange(event){
    this.setState({firstName: event.target.value});
  }
  render(){
    return(
      <div>
        <h3>Contact Form</h3>
      <form className = "Contact_Form" onSubmit={event => event.preventDefault()}>
        <label>Firstname
            <input type ="text"
                   value = {this.firstName}
                   onChange={this.handleFirstNameChange}/>
        </label>
        <label>Lastname
            <input type ="text"
                   value = {this.lastName}
                   onChange={this.handleLastNameChange}/>
        </label>
        <label>e-mail
            <input type = "text"
                   value = {this.email}
                   onChange={this.handleEmailChange}/>
        </label>
        <label>Password
            <input type = "num"
                   value = {this.password}
                   onChange ={this.handlePasswordChange}/>
        </label>
        <button type="button" onSubmit={this.handleSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Contact_Form;