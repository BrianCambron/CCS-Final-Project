import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Cookies from 'js-cookie';


class App extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Router>
        <Switch>
        <Route exact= {true} path="/">
          <LoginForm />
        </Route>
          <Route path="/Register">
            <RegisterForm />
          </Route>
        </Switch>
      </Router>
    )
  }
}
export default App;
