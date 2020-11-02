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
      name:'',
      category:'MSC',
      money: 0,
    }
    this.createEnvelope = this.createEnvelope.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    handleChange(event){
      this.setState({[event.target.name]: event.target.value});
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
        <Modal.Header closeButton>New Envelope</Modal.Header>
        <Modal.Body>
          <form onSubmit={(e) => {this.createEnvelope(e, this.state); this.setState({name: '', money:0})}}>
            <div className="form-group">
              <label htmlFor='name' className="mr-2">Envelope name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="money" className="mr-2">Money</label>
              <input type="number" min="0" id="money" name="money" value={this.state.money} onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="category" className="mr-2">Category</label>
              <select id="category" name="category" value={this.state.category} onChange={this.handleChange}>
                <option value="MSC">Miscellaneous</option>
                <option value="ENT">Entertainment</option>
                <option value="HSG">Housing</option>
                <option value="TNSPTN">Transportation</option>
                <option value="ULTS">Utilities</option>
                <option value="CTNG">Clothing</option>
                <option value="MDCL">Medical</option>
                <option value="ISRNC">Insurance</option>
                <option value="PSNL">Personal</option>
                <option value="RTMNT">Retirements</option>
                <option value="EDCTN">Education</option>
                <option value="SVNG">Savings</option>
                <option value="GFT">Gifts</option>
                <option value="DBT">Debt</option>
                <option value="HSHIMS">Household items</option>
                <option value="EMG">Emergency</option>
              </select>
            </div>
            <button type="submit">Create</button>
          </form>
        </Modal.Body>
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
