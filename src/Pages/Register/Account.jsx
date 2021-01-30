import React, { Component } from "react";
import './Acc.css';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class Account extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:'',
      lastName:'',
      email:'',
      password:'',
      confirmPassword:''
    }
  }

  changeHandlerUserName = (e) => {
    this.setState({ 
        firstName: e.target.value
     })
    this.state.firstName = e.target.value;
  };
  changeHandlerLasName = (e) => {
    this.setState({ 
        lastName: e.target.value
     })
    this.state.lastName = e.target.value;
  };
  changeHandlerEmail = (e) => {
    this.setState({ 
        email: e.target.value
     })
    this.state.email = e.target.value;
  };
  changeHandlerPassword = (e) => {
    this.setState({ 
        password: e.target.value
     })
    this.state.password = e.target.value;
  };
  changeHandlerConfirmPassword = (e) => {
    this.setState({ 
        confirmPassword: e.target.value
     })
    this.state.confirmPassword = e.target.value;
  };

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state);
    let userData = {
      "cartId":'',
      "firstName": this.state.firstName,
      "lastName": this.state.lastName,
      "email": this.state.email,
      "password": this.state.password,
      "confirmPassword": this.state.confirmPassword,
      "service":"advance"
    }
    axios.post("http://fundoonotes.incubation.bridgelabz.com/api/user/adminSignUp",userData)
    .then(response => {
      console.log(response);
      console.log(response.data);
    })
  }

    render() {    
        return (
          <div className="wrapper">
            <div className="form-wrapper">
             <h2>Fundoo</h2>
              <h3>Create your Fundoo Account</h3>
              <form onSubmit={this.handleSubmit}>
                <div className="firstName">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    placeholder="First Name"
                    type="text"
                    name="firstName"
                    noValidate
                    onChange={this.changeHandlerUserName}
                  />
                </div>
                <div className="lastName">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    placeholder="Last Name"
                    type="text"
                    name="lastName"
                    noValidate
                    onChange={this.changeHandlerLasName}
                  />
                </div>
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    noValidate
                    onChange={this.changeHandlerEmail}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    name="password"
                    noValidate
                    onChange={this.changeHandlerPassword}
                  />
                </div>
                <div className="password">
                  <label htmlFor="password">Confirm Password</label>
                  <input
                    placeholder="Password"
                    type="password"
                    noValidate
                    onChange={this.changeHandlerConfirmPassword}
                  />
                </div>
                <div className="createAccount">
                  <small>SignIn</small>
                  <button type="submit">Create Account</button>
                </div>
              </form>
            </div>
          </div>
        );
      }
    }    
    export default withRouter(Account);
