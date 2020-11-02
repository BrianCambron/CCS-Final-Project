import React, { Component } from "react";
import { Switch, Route, Link, Redirect, withRouter} from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashBoard from './components/DashBoard';
import Cookies from 'js-cookie';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: Cookies.get('Authorization')? true: false,
    }
    this.registerUser = this.registerUser.bind(this)
    this.logIn = this.logIn.bind(this)
    this.logOut = this.logOut.bind(this)
  }
  async registerUser(e, obj){
    e.preventDefault();
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/rest-auth/registration/', options)
    const data = await response.json().catch(handleError)
    console.log(data);
    if(data.key){
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({isLoggedIn:true});
    }
   }
  async logIn(e, obj){
    e.preventDefault();
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    };

    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/rest-auth/login/', options)
    const data = await response.json().catch(handleError)
    if(data.key){
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({isLoggedIn:true});
    }
   }
  async logOut(){
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
        },
      };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/rest-auth/logout/', options)
    const data = await response.json().catch(handleError)

    if(data.detail === 'Successfully logged out.'){
      Cookies.remove('Authorization');
      this.setState({isLoggedIn:false});
      this.props.history.push('/')
    }
  }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <React.Fragment>
        <Switch>
          <Route path="/dashboard" render={(props) => (<DashBoard {...props} logOut={this.logOut}/>)}/>
          <Route exact= {true} path="/">
            {isLoggedIn === false?<LoginForm logIn={this.logIn}/> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/Register">
            <RegisterForm registerUser={this.registerUser}/>
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default withRouter(App);
