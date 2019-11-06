import React from 'react';
import './paymentForm.css';


class Payment extends React.Component{
    constructor(props){
      super(props);
        this.state ={
          firstName :'',
          lastName :'',
          cardNb :'',
          secuCode: '',
          expMonth :'',
          expYear: '',
          streetName: '',
          city:'',
          postalCode:'',
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
        <div className ="PaymentForm">
            
                <form className = "Payment_form" onSubmit={event => event.preventDefault()}>
                    <div className="pForm">
                        <h2>Payment Form</h2>
                        <div className="div">
                        <label className="labelPay">Firstname
                             <input className="inputPay"
                                    type ="text"
                                    value = {this.firstName}
                                    onChange={this.handleFirstNameChange}/>
                        </label>
                        </div>
                        <div className="div">
                        <label className="labelPay">Lastname
                             <input className="inputPay"
                                    type ="text"
                                    value = {this.lastName}
                                    onChange={this.handleLastNameChange}/>
                        </label>
                        </div>
                        <div className="div">
                        <label className="labelPay">credit card number
                             <input className="inputPay"
                                    type = "num"
                                    value = {this.cardNb}
                                    onChange={this.handleCardNbChange}/>
                        </label>
                        </div>
                        <div className="div">
                        <label className="labelPay">security code
                             <input className="inputPay"
                                    type = "password"
                                    value = {this.secuCode}
                                    onChange ={this.handleSecuCodeChange}/>
                        </label>
                        </div>
                        <div className="divPay">
                        <label className="labelPay">expiration month
                            <select name="month">
                                <option value="jan">January</option>
                                <option value="feb">February</option>
                                <option value="mar">March</option>
                                <option value="apr">April</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="aug">August</option>
                                <option value="sep">September</option>
                                <option value="oct">October</option>
                                <option value="nov">November</option>
                                <option value="dec">December</option>
                            </select>
                        </label>
                        </div>
                        <div className="divPay">
                        <label className="labelPay">expiration year
                            <select name="year">
                                <option value="2059">2059</option>
                                <option value="2060">2060</option>
                                <option value="2061">2061</option>
                                <option value="2062">2062</option>
                                <option value="2063">2063</option>
                                <option value="2064">2064</option>
                                <option value="2065">2065</option>
                            </select>                
                        </label>
                    </div> 
                    </div>                           
                <div className="address"> 
                <h2>Billing address</h2>
                <div className="div">
                <label className="labelPay">Street Name
                     <input className="inputPay"
                            type="text"
                            value={this.streetName}
                            onChange={this.handleStreetNameChange}/>
                </label>
                </div>
                <div className="div">
                <label className="labelPay">City
                    <input className="inputPay"
                           type="text"
                           value={this.city}
                           onChange={this.handleCityChange}/>
                </label>
                </div>
                <div className="div">
                <label className="labelPay">Postal Code
                    <input className="inputPay"
                        type="num"
                        value={this.postalCode}
                        onChange={this.handlePostalCodeChange}/>

                </label>
                </div>
                </div> 
                </form>
            </div>
            
            
        
    );

}
}

export default Payment;
