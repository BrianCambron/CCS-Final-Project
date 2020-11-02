import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './RegisterForm.css'

class RegisterForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      email: '',
      password1:'',
      password2:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <form className="col-12 col-md-6 register" onSubmit={(e) => this.props.registerUser(e, this.state)}>
        <img style={{width: '10%', display:'block', margin: 'auto'}}src='https://cdn0.iconfinder.com/data/icons/money-25/192/__-2-512.png' alt=''/>
        <h5 className="Register">Create Account</h5>
        <div className="form-group">
          <input style={{width: '75%'}}type='text' className="form-control" placeholder="Username" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input style={{width: '75%'}}type='text' className="form-control" placeholder="Email" id="email" name="email" value={this.state.email} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input style={{width: '75%'}} type='password' className="form-control" placeholder="Password" id="password1" name="password1" value={this.state.password1} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input style={{width: '75%'}}type='password' className="form-control" placeholder="Confirm Password" id="password2" name="password2" value={this.state.password2} onChange={this.handleChange}/>
        </div>
        <div className="form-bottom">
          <button className="form-button">Register</button>
          <Link to="/">Already have an account?</Link>
        </div>
      </form>
    )
  }
}
export default RegisterForm;
