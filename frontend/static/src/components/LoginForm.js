import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CSS/LoginForm.css';

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
      <div className="d-flex justify-content-center">
        <form className="col-8 col-sm-6 login" onSubmit={(e) => this.props.logIn(e, this.state)}>
          <img style={{width: '10%', display:'block', margin: 'auto', paddingTop:'9%'}}src='https://cdn0.iconfinder.com/data/icons/aami-flat-business-set-3/64/business_3-14-512.png' alt=''/>
          <h5 className="heading">Log in</h5>
          <div className="form-group">
            <input style={{width:'75%', borderRadius: '18px'}} type='text' className="form-control" placeholder="Username" id="username" name="username" autoComplete="on" value={this.state.username} onChange={this.handleChange}/>
          </div>
          <div className="form-group">
            <input style={{width:'75%', borderRadius: '18px'}} type='password' className="form-control" placeholder="Password" id="password" name="password" autoComplete="on" value={this.state.password} onChange={this.handleChange}/>
          </div>
          <div className="form-bottom">
            <button className="form-button-login">Log in</button>
            <Link style={{color: 'white'}} to="/Register">Don't have an account?</Link>
          </div>
        </form>
      </div>
      </React.Fragment>
    )
  }
}
export default LoginForm;
