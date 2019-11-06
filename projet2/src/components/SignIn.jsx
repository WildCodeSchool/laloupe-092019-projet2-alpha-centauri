import React from 'react';
import './signIn.css';

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
      <div className ="container_form dsk-offset-3">
        
      <form className = "Contact_Form dsk-offset-1 tab-offset-1 mob-offset-2" onSubmit={event => event.preventDefault()}>
        <h3>Contact Form</h3>
        <label className="label">Firstname
            <input 
                  className="inputSign"
                  type ="text"
                   value = {this.firstName}
                   onChange={this.handleFirstNameChange}/>
        </label>
        <label className="label">Lastname
            <input
                  className="inputSign" 
                  type ="text"
                   value = {this.lastName}
                   onChange={this.handleLastNameChange}/>
        </label>
        <label className="label">e-mail
            <input 
                  className="inputSign"
                    type = "text"
                   value = {this.email}
                   onChange={this.handleEmailChange}/>
        </label>
        <label className="label">Password
            <input 
                  className="inputSign"
                  type = "num"
                   value = {this.password}
                   onChange ={this.handlePasswordChange}/>
        </label>
        <button className="buttonSign" type="button" onSubmit={this.handleSubmit}>Submit</button>
      </form>
      </div>
    )
  }
}

export default Contact_Form;