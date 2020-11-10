import React, { Component } from 'react';
import Cookies from 'js-cookie';
import './CSS/Settings.css'

class Settings extends Component {
  constructor(props){
    super(props);
    this.state = {
      image: props.image,
      preview:props.image,
      message:props.message,
      phone_number:props.phone_number,
    }
    this.addProfile = this.addProfile.bind(this)
    this.handleImage = this.handleImage.bind(this)
    this.editProfile = this.editProfile.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }
  async addProfile(e){
    e.preventDefault();
    const formData = new FormData()
    formData.append('avatar', this.state.image);
    formData.append('phone_number', this.state.phone_number);
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
    this.props.updatePhone(data.phone_number);
  }
  async editProfile(e, id){
    e.preventDefault();
    const formData = new FormData();
    formData.append('avatar', this.state.image);
    formData.append('phone_number', this.state.phone_number);
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
    this.props.updatePhone(data.phone_number);
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
        {this.props.image === 'undefined' || this.props.image === undefined? <form onSubmit={(e) => this.addProfile(e, this.state)}>
          <div className="form-group">
            <label htmlFor="avatar">Add a profile picture:</label>
            <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
            <img style={{width: '30%'}}src={this.state.preview} alt=''/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter your phone number:</label>
            <input className="ml-2" type="tel" id="phone" name="phone" value={this.state.phone_number} onChange={this.handleChange} required/>
            <small className='ml-1'>Format: +1112223333</small>
          </div>
          <button>Add Profile</button>
        </form>
        : <form onSubmit={(e) => this.editProfile(e, profile_id)}>
          <div className="form-group">
            <label htmlFor="avatar">Upload a profile picture:</label>
            <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
            <img style={{width: '30%'}}src={this.state.preview} alt=''/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Enter your phone number:</label>
            <input className="ml-2" type="tel" id="phone" name="phone" value={this.state.phone_number} onChange={this.handleChange} required/>
            <small className='ml-1'>Format: +12223334444</small>
          </div>
          <button>Add Profile</button>
        </form>}
        <form>
          <p className="mt-2" style={{fontStyle: 'italic', fontWeight: 'bold'}}>Each Thursday you will receive an inspirational message telling you if you saved money or not. You can also attach your own personalized message down below.</p>
            <div className="form-group">
              <label htmlFor="custom">Create Custom Message:</label>
              <textarea className="form-control" id="custom" rows="3"></textarea>
           </div>
          <button>Done</button>
       </form>
      </div>
    )
  }
}
export default Settings;
