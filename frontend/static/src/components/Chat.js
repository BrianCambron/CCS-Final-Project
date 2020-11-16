import React, { Component } from 'react';
import { Tooltip, OverlayTrigger, Card } from "react-bootstrap";
import './CSS/Chat.css'

class Chat extends Component{
  constructor(props){
    super(props);
    this.state = {
      show:true,
    }
  }
  render(){
  const chats = this.props.chats.map(chat =>
    <Card border="info" key={chat.id} className='mb-2'>
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {chat.message}
          </p>
          <footer className="blockquote-footer">
            <cite title="Source Title">{chat.user}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>);
    const renderTooltip = (props) => (
      <Tooltip id="button-tooltip" {...props}>
        Share Budget Tips!
      </Tooltip>
    );
    return(
      <div className="messages d-inline-flex flex-column bd-highlight shadow p-3 mb-5 rounded">
        <div style={{textAlign: 'center'}}>
        <OverlayTrigger
          placement="right"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <img style={{width:'20%'}}src="https://cdn2.iconfinder.com/data/icons/business-finance-character/28/20-512.png" alt=""/>
        </OverlayTrigger>,
        </div>
        <div className="p-2 bd-highlight">
         {chats}
        </div>
      </div>
    )
  }
}
export default Chat;
