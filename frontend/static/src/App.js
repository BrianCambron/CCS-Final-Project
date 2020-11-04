import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter} from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashBoard from './components/DashBoard';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Social from './components/Social';
import Cookies from 'js-cookie';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: !!Cookies.get('Authorization'),
      image: localStorage.getItem('avatar'),
    }
    this.registerUser = this.registerUser.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.updateImage = this.updateImage.bind(this);
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
    // console.log(data);
    if(data.key){
      Cookies.set('Authorization', `Token ${data.key}`);
      this.setState({isLoggedIn:true});
    }
   }

   updateImage(image) {
     this.setState({image});
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
      localStorage.setItem('avatar', data.user.profile.avatar);
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
      localStorage.removeItem('avatar');
      this.props.history.push('/')
    }
   }
  render(){
    console.log(localStorage);
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <React.Fragment>
      {isLoggedIn === false ? '': <Navbar logOut={this.logOut} image={this.state.image}/>}
        <Switch>
          <Route path="/dashboard" render={(props) => (<DashBoard {...props}/>)}/>
          <Route path="/settings" render={(props) => (<Settings {...props} image={this.state.image} updateImage={this.updateImage}/>)}/>
          <Route path="/social" render={(props) => (<Social {...props}/>)}/>
          <Route exact= {true} path="/">
            {isLoggedIn === false?<LoginForm logIn={this.logIn}/> : <Redirect to="/dashboard" />}
          </Route>
          <Route path="/Register">
            {isLoggedIn === false?<RegisterForm registerUser={this.registerUser}/> : <Redirect to="/settings" />}
          </Route>
        </Switch>
      </React.Fragment>
    )
  }
}
export default withRouter(App);
