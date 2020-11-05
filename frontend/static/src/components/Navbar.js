import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './CSS/Navbar.css'
import { bubble as Menu } from 'react-burger-menu';

class Navbar extends Component{
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
    }
    this.handleStateChange = this.handleStateChange.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleStateChange(state) {
    this.setState({menuOpen: state.isOpen})
  }
  closeMenu() {
    this.setState({menuOpen: false})
  }

  render(){
    return(
      <>
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <Link to="/dashboard" onClick={() => this.closeMenu()}><i className="fas fa-home mr-2"></i>DashBoard</Link>
        <Link to="/social" onClick={() => this.closeMenu()}><i className="fas fa-users mr-2"></i>Social</Link>
        <Link to="/guides" onClick={() => this.closeMenu()}><i className="fas fa-glasses mr-2"></i>Tips & Guides</Link>
        <Link to="/settings" onClick={() => this.closeMenu()}><i className="fas fa-user mr-2"></i>Settings</Link>
      </Menu>
      <div className='d-flex justify-content-between align-items-start mb-2'>
        <div>
        </div>
        <img className='profile' src={this.props.image ? this.props.image : "https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-256.png"} alt=""/>
        <button className="navbar-buttons mr-2 p-2 bd-highlight" onClick={this.props.logOut}>Log out</button>
      </div>
    </>
    )
  }
}
export default Navbar;
