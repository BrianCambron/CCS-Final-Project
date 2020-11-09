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
    this.editProfile = this.editProfile.bind(this)
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
  async editProfile(e, id){
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', this.state.image);
    const options = {
      method:'PUT',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
      },
      body:formData,
    }
    const handleError = (err) => console.warn(err);
    const response = await fetch(`/api/v1/profile/${id}/`, options)
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
    const profile_id = localStorage.getItem('profile_id')
    return(
      <div className="settings shadow p-3 mb-5">
        {this.props.image === 'undefined' || this.props.image === undefined? <form onSubmit={(e) => this.addPicture(e, this.state)}>
          <div className="form-group">
            <label htmlFor="avatar">Add a profile picture:</label>
            <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
            <img style={{width: '30%'}}src={this.state.preview} alt=''/>
          </div>
          <button>Add Profile</button>
        </form>
        : <form onSubmit={(e) => this.editProfile(e, profile_id)}>
          <div className="form-group">
            <label htmlFor="avatar">Upload a profile picture:</label>
            <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
            <img style={{width: '30%'}}src={this.state.preview} alt=''/>
          </div>
          <button>Add Profile</button>
        </form>}
        <form>
          <div className="form-group mt-2">
            <label htmlFor="message">Example Messages</label>
            <select className="form-control" id="message">
              <option>You saved ____ amount of money!</option>
              <option>Congrats! You saved ____.</option>
              <option>You are getting closer to your goal! You saved ____.</option>
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
