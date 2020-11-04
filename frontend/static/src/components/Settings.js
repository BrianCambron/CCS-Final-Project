import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './CSS/Settings.css'

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: props.image,
      preview:props.image,
      message:'',
    }
    this.addPicture = this.addPicture.bind(this)
    this.handleImage = this.handleImage.bind(this)
  }

  async addPicture(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append('avatar', this.state.image);
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: formData,
      };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/profile/', options)
    const data = await response.json().catch(handleError);
    this.props.updateImage(data.avatar);
  }
  handleImage(e){
    let file = e.target.files[0];
    this.setState({
      image: file
    });

    let reader = new FileReader();

    reader.onloadend = () => {
      this.setState({
        preview: reader.result
      });
    }
    reader.readAsDataURL(file);
  }
  render(){
    return(
      <div className="settings mt-4 shadow p-3 mb-5 rounded">
        <form onSubmit={(e) => this.addPicture(e, this.state)}>
          <div className="form-group">
            <label htmlFor="avatar">Upload a profile picture:</label>
            <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
            <img style={{width: '30%'}}src={this.state.preview} alt=''/>
          </div>
          <button>Add Profile</button>
        </form>
        <form>
        <div className="form-group mt-2">
          <label htmlFor="message">Example Messages</label>
          <select className="form-control" id="message">
            <option>Stop Spending Money!</option>
            <option>You are reaching your limit!</option>
            <option>Please don't</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="percentage">At what percentage would you like it sent out?</label>
          <select multiple className="form-control" id="percentage">
            <option>75%</option>
            <option>50%</option>
            <option>25%</option>
          </select>
          </div>
          <div className="form-group">
          <label htmlFor="custom">Create Custom Message</label>
          <textarea className="form-control" id="custom" rows="3"></textarea>
        </div>
        <button>Done</button>
        </form>
      </div>
    )
  }
}
export default Settings;
