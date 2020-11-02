import React, { Component } from "react";



class DashBoard extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <button onClick={this.props.logOut}>Log out</button>
      </div>
    )
  }
}
export default DashBoard;
