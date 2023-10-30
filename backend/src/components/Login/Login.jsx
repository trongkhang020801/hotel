import React, { useState, Component } from 'react';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import CustomerDataService from "../../services/customer.services";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.onChangeidCustomer = this.onChangeidCustomer.bind(this);
    this.onChangemailCustomer = this.onChangemailCustomer.bind(this);
    this.loginCustomer = this.loginCustomer.bind(this);
    this.state={
      idCustomer:"",
      maiCustomer:"",

      submitted: false
    }
  }
  onChangeidCustomer(e) {
    this.setState({
      idCustomer: e.target.value
    });
  }
  onChangemailCustomer(e) {
    this.setState({
      mailCustomer: e.target.value
    });
  }
  loginCustomer() {
    var data = {
      idCustomer: this.state.idCustomer,
      mailCustomer: this.state.mailCustomer
    };
    console.log(data)
    CustomerDataService.login(data)
      .then(response => {
        this.setState({
          idCustomer: response.data.idCustomer,
          mailCustomer: response.data.mailCustomer,
          submitted: true
        });
        if (!response.data)
          window.confirm("Your Email or Password is incorrect");
        else
        {
          console.log(response.data)
        if (window.confirm("Login successfuly")===true)
          window.location = "http://localhost:3000/"
        }
      })
      .catch(e => {
        console.log(e);
        window.confirm("Your Email or Password is incorrect!!!");
        // console.confirm("Your Email or Password is incorrect");
      });
  }
  render(){
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' 
                label='Email address' 
                id='idCustomer' 
                type='email'
                required
                value={this.state.idCustomer}
                onChange={this.onChangeidCustomer}
                name="idCustomer"/>
      <MDBInput wrapperClass='mb-4' 
                label='Password' 
                id='mailCustomer'
                required
                value={this.state.mailCustomer}
                onChange={this.onChangemailCustomer}
                name='mailCustomer'
                type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={this.loginCustomer}>Sign in</MDBBtn>
    </MDBContainer>
  );
  }
}
