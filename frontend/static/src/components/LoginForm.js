import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './LoginForm.css';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      username:'',
      // email: '',
      password:'',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <React.Fragment>
      <form className="col-12 col-md-6 login" onSubmit={(e) => this.props.logIn(e, this.state)}>
        <img style={{width: '10%', display:'block', margin: 'auto'}}src='https://cdn0.iconfinder.com/data/icons/money-25/192/__-2-512.png' alt=''/>
        <h5 className="Register">Log in</h5>
        <div className="form-group">
          <input style={{width:'75%'}} type='text' className="form-control" placeholder="Username" id="username" name="username" value={this.state.username} onChange={this.handleChange}/>
        </div>
        <div className="form-group">
          <input style={{width:'75%'}} type='password' className="form-control" placeholder="Password" id="password" name="password" value={this.state.password} onChange={this.handleChange}/>
        </div>
        <div className="form-bottom">
          <button className="form-button">Log in</button>
          <Link to="/Register">Don't have an account?</Link>
        </div>
      </form>
      </React.Fragment>
    )
  }
}
export default LoginForm;
