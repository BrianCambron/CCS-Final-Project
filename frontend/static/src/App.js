import React, { Component } from "react";
import { Switch, Route, Redirect, withRouter} from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import DashBoard from './components/DashBoard';
import Navbar from './components/Navbar';
import Settings from './components/Settings';
import Social from './components/Social';
import Guides from './components/Guides';
import Cookies from 'js-cookie';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: !!Cookies.get('Authorization'),
      image: localStorage.getItem('avatar'),
      phone_number:localStorage.getItem('phone_number'),
      message: localStorage.getItem('message'),
    }
    this.registerUser = this.registerUser.bind(this);
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
    this.updateImage = this.updateImage.bind(this);
    this.updatePhone = this.updatePhone.bind(this);
    this.updateMessage = this.updateMessage.bind(this);
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
      // localStorage.setItem('avatar', data.user.profile?.avatar);
    }
   }

  updateImage(image) {
    this.setState({image});
  }
  updatePhone(updatedPhone){
    this.setState({phone_number: updatedPhone})
  }
  updateMessage(updatedMessage){
    this.setState({message: updatedMessage})
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
      this.setState({isLoggedIn:true, image: data.user.profile?.avatar});
      localStorage.setItem('profile_id', data.user.profile?.id);
      localStorage.setItem('avatar', data.user.profile?.avatar);
      localStorage.setItem('phone_number', data.user.profile?.phone_number);
      localStorage.setItem('message', data.user.profile?.message);
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
      localStorage.removeItem('profile_id');
      localStorage.removeItem('phone_number');
      localStorage.removeItem('message');
      this.props.history.push('/')
    }
   }
  render(){
    const isLoggedIn = this.state.isLoggedIn;
    return(
      <React.Fragment>
      {isLoggedIn === false ? '': <Navbar logOut={this.logOut} pageWrapId={'page-wrap'} outerContainerId={'outer-container'} image={this.state.image}/>}
        <Switch>
          <Route path="/dashboard" render={(props) => (<DashBoard {...props}/>)}/>
          <Route path="/settings" render={(props) => (<Settings {...props} image={this.state.image} message={this.state.message} updateMessage={this.updateMessage} updateImage={this.updateImage} updatePhone={this.updatePhone} phone_number={this.state.phone_number}/>)}/>
          <Route path="/social" render={(props) => (<Social {...props}/>)}/>
          <Route path="/guides" render={(props) => (<Guides {...props}/>)}/>
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
