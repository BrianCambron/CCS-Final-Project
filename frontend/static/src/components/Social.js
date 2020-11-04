import React, { Component } from 'react';
import ChatForm from './ChatForm';
import Cookies from 'js-cookie';
import './CSS/Social.css'


class Social extends Component {
  constructor(props){
    super(props);
    this.state = {
      chats:[],
    }
  this.postChat = this.postChat.bind(this);
  }
  componentDidMount(){
      fetch('/api/v1/chats/')
      .then(response => response.json())
      .then(data => this.setState({chats: data}))
      .catch(error => console.log('Error:', error));
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
    const response = await fetch('/api/v1/chats', options);
    const data = await response.json().catch(handleError);
    const chats = [...this.state.chats, data];
    this.setState({chats})
  }
  render(){
    console.log(this.state.chats);
    return(
      <div>
        <ChatForm chats={this.state.chats} postChat={this.postChat}/>
      </div>
    )
  }
}
export default Social;
