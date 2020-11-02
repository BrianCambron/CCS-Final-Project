import React, { Component } from "react";
import { Modal, Button} from "react-bootstrap";
import Cookies from 'js-cookie';
import './DashBoard.css'


class DashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-256.png',
      envelopes:[],
      show:false,
      
    }
    this.createEnvelope = this.createEnvelope.bind(this)
    this.handleModal = this.handleModal.bind(this)
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  async createEnvelope(e, obj){
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
      const response = await fetch('/api/v1/envelopes/', options)
      const data = await response.json().catch(handleError)
      const envelopes = [...this.state.envelopes, data];
      this.setState({envelopes})
    }
  render(){
    return(
      <>
      <nav className="dashboard">
        <div>
          <button className="navbar-buttons mr-2 ml-2">Social</button>
          <button className="navbar-buttons mr-2">Tips & Guides</button>
        </div>
        <div style={{textAlign: 'center'}}>
          <img src={this.state.image} alt=""/>
        </div>
        <div>
          <button className="navbar-buttons mr-2">Settings</button>
          <button className="navbar-buttons mr-2" onClick={this.props.logOut}>Log out</button>
        </div>
      </nav>
      <aside>
        <Button className="aside-buttons" onClick={() => {this.handleModal()}}>Create Envelope</Button>
        <Modal animation={false} show={this.state.show} onHide={() => {this.handleModal()}}>
        <Modal.Header closeButton>Example</Modal.Header>
        <Modal.Body>Body</Modal.Body>
        <Modal.Footer>
        <Button onClick={() => {this.handleModal()}}>Close</Button>
        </Modal.Footer>
        </Modal>
      </aside>
      </>
    )
  }
}
export default DashBoard;
