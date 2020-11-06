import React, { Component } from 'react';
import ChatForm from './ChatForm';
import Chat from './Chat';
import Cookies from 'js-cookie';
import { Modal, Button, } from "react-bootstrap";
import './CSS/Social.css'


class Social extends Component {
  constructor(props){
    super(props);
    this.state = {
      chats:[],
      show:false,
    }
  this.postChat = this.postChat.bind(this);
  this.handleModal = this.handleModal.bind(this)
  this.fetchMessages = this.fetchMessages.bind(this)
  }
  handleModal(){
    this.setState({show:!this.state.show})
  }
  async fetchMessages(){
    const response = await fetch('api/v1/chats/');
    const data = await response.json();
    this.setState({chats:data});
  }
  componentDidMount(){
    this.fetchMessages();
    this.messageTimer = setInterval(this.fetchMessages, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.messageTimer);
  }
  async postChat(e, obj){
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
    const response = await fetch('/api/v1/chats/', options);
    const data = await response.json().catch(handleError);
    const chats = [...this.state.chats, data];
    this.setState({chats})
  }
  render(){
    return(
      <>
      <aside>
      <Modal animation={false} show={this.state.show} onHide={() => {this.handleModal()}}>
      <Modal.Header closeButton>New Message</Modal.Header>
      <Modal.Body>
        <ChatForm postChat={this.postChat}/>
      </Modal.Body>
      <Modal.Footer>
      <Button onClick={() => {this.handleModal()}}>Close</Button>
      </Modal.Footer>
      </Modal>
      </aside>
      <Chat chats={this.state.chats}/>
      <footer className='footer'><Button className='aside-buttons'onClick={() => {this.handleModal()}}><i className="fas fa-comment-alt"></i></Button></footer>
      </>
    )
  }
}
export default Social;
