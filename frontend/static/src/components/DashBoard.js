import React, { Component } from "react";
import { Modal, Button} from "react-bootstrap";
import Cookies from 'js-cookie';
import EnvelopeList from './EnvelopeList'
import { Pie } from 'react-chartjs-2';
import './DashBoard.css'


class DashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      image: 'https://cdn3.iconfinder.com/data/icons/vector-icons-6/96/256-256.png',
      envelopes:[],
      show:false,
      display:false,
      name:'',
      money: 0,
    }
    this.createEnvelope = this.createEnvelope.bind(this)
    this.handleModal = this.handleModal.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.deleteEnvelope = this.deleteEnvelope.bind(this)
    this.handleModal2 = this.handleModal2.bind(this)
  }
  async componentDidMount(){
    const response = await fetch('api/v1/envelopes/');
    const data = await response.json();
    this.setState({envelopes:data});
  }

  handleModal(){
    this.setState({show:!this.state.show})
  }
  handleModal2(){
    this.setState({display:!this.state.display})
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
  async deleteEnvelope(id){
    const options = {
      method: 'DELETE',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
    }
    const handleError = (err) => console.warn(err);
    const response = await fetch(`api/v1/envelopes/${id}/`, options)
    const data = await response.json().catch(handleError)
    const envelopes = [...this.state.envelopes]
    const index = envelopes.findIndex(envelope => envelope.id === id)
    envelopes.splice(index,1);
    this.setState({envelopes})
  }
  render(){
    console.log(this.state.envelopes.filter(envelope => console.log(envelope.money)));
    const data = this.state.envelopes.map(envelope => envelope.money);
    const labels = this.state.envelopes.map(envelope => envelope.name);
    return(
      <>
      <nav className="dashboard">
        <div>
          <button className="navbar-buttons mr-2 ml-2">Social</button>
          <button className="navbar-buttons mr-2">Guides</button>
        </div>
        <div style={{textAlign: 'center'}}>
          <img className="profile"src={this.state.image} alt=""/>
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
            <button type="submit">Create</button>
          </form>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => {this.handleModal()}}>Close</Button>
        </Modal.Footer>
        </Modal>
        <Button className="aside-buttons" onClick={() => {this.handleModal2()}}>Graph</Button>
        <Modal animation={false} show={this.state.display} onHide={() => {this.handleModal2()}}>
        <Modal.Header closeButton>Spending habits</Modal.Header>
        <Modal.Body>
        <div className="chart">
          <Pie
            data = {{
                datasets: [{
                    data,
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                  ],
                }],
                borderColor: [
                  'rgba(255, 99, 132, 1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                  borderWidth: 1,
                // These labels appear in the legend and in the tooltips when hovering different arcs
                labels
            }}
            options={{}}
          />
        </div>
        </Modal.Body>
        <Modal.Footer>
        <Button onClick={() => {this.handleModal2()}}>Close</Button>
        </Modal.Footer>
        </Modal>
      </aside>
      <EnvelopeList envelopes={this.state.envelopes} deleteEnvelope={this.deleteEnvelope}/>
      </>
    )
  }
}
export default DashBoard;
