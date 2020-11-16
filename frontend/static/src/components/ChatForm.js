import React, { Component } from 'react';

class ChatForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:'',
      message: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  render(){
    return(
      <React.Fragment>
      <div className="form" onSubmit={(e) => {this.props.postChat(e, this.state); this.setState({user:'',message:''})}}>
        <form className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type='text' className="form-control" id="message" name="message" value={this.state.message} onChange={this.handleChange}/>
          </div>
            <button className="btn btn-info">Post Message</button>
        </form>
      </div>
      </React.Fragment>
    )
  }
}
export default ChatForm
