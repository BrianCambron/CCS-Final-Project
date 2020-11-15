import React, { Component } from "react";
import { Modal, Button} from "react-bootstrap";
import Cookies from 'js-cookie';
import EnvelopeList from './EnvelopeList'
import { Pie } from 'react-chartjs-2';
import Receipt from './Receipt';
import './CSS/DashBoard.css'


class DashBoard extends Component{
  constructor(props){
    super(props);
    this.state = {
      envelopes:[],
      show:false,
      display:false,
      hide:false,
      name:'',
      money: 0,
    }
    this.createEnvelope = this.createEnvelope.bind(this);
    this.handleModal = this.handleModal.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteEnvelope = this.deleteEnvelope.bind(this);
    this.handleModal2 = this.handleModal2.bind(this);
    this.handleModal3 = this.handleModal3.bind(this);
    this.editEnvelope = this.editEnvelope.bind(this);
    this.subtractTotal = this.subtractTotal.bind(this);
  }
  async componentDidMount(){
    const response = await fetch('api/v1/envelopes/user/');
    const data = await response.json();
    this.setState({envelopes:data});
  }

  handleModal(){
    this.setState({show:!this.state.show})
  }
  handleModal2(){
    this.setState({display:!this.state.display})
  }
  handleModal3(){
    this.setState({hide:!this.state.hide})
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
      const response = await fetch('api/v1/envelopes/user/', options)
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
    // const response = await fetch(`api/v1/envelopes/user/${id}/`, options)
    // const data = await response.json().catch(handleError);
    await fetch(`api/v1/envelopes/user/${id}/`, options).catch(handleError);
    const envelopes = [...this.state.envelopes]
    const index = envelopes.findIndex(envelope => envelope.id === id)
    envelopes.splice(index,1);
    this.setState({envelopes})
  }
  async editEnvelope(obj, id){
    const options = {
      method:'PUT',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(obj),
    };
     const handleError = (err) => console.warn(err);
     const response = await fetch(`api/v1/envelopes/user/${id}/`, options)
     const data = await response.json().catch(handleError)
     const envelopes = [...this.state.envelopes];
     const index = envelopes.findIndex(envelope => envelope.id === id);
     envelopes[index] = data;
     this.setState({envelopes})
  }
  async subtractTotal(id, data){
    const envelopes = [...this.state.envelopes];
    const index = envelopes.findIndex(envelope => envelope.id === id);
    const selectedEnvelope = envelopes[index];
    const initialMoney = selectedEnvelope.money
    const halfOfEnvelope = initialMoney/2
    selectedEnvelope.money = selectedEnvelope.money - data;
    let updatedData = {money: selectedEnvelope.money, name:selectedEnvelope.name}

    if(halfOfEnvelope === updatedData.money){
      alert('You have spent 50% of what you alloted')
    }
    else if(updatedData.money === 0){
      alert('You have spent everything in this envelope!')
    }
    const options = {
      method:'PUT',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData),
    };
    const handleError = (err) => console.warn(err);
    const response = await fetch(`api/v1/envelopes/user/${id}/`, options);

  }
  render(){
    const data = this.state.envelopes.map(envelope => envelope.money);
    const labels = this.state.envelopes.map(envelope => envelope.name);
    return(
      <>
        <aside>
          <Modal animation={false} show={this.state.show} onHide={() => {this.handleModal()}}>
          <Modal.Header closeButton>New Envelope</Modal.Header>
          <Modal.Body>
            <form onSubmit={(e) => {this.createEnvelope(e, this.state); this.setState({name: '', money:0})}}>
              <div className="row">
                <div className="col">
                  <label htmlFor='name' className="mr-2">Envelope name</label>
                  <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange}/>
                </div>
                <div className="col">
                  <label htmlFor="money" className="mr-2">Money</label>
                  <input type="number" className="form-control" min="0" id="money" name="money" value={this.state.money} onChange={this.handleChange}/>
                </div>
              </div>
              <button className="mt-2" type="submit">Create</button>
            </form>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={() => {this.handleModal()}}>Close</Button>
          </Modal.Footer>
          </Modal>
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
          <Modal animation={false} show={this.state.hide} onHide={() => {this.handleModal3()}}>
          <Modal.Header closeButton>Upload Receipt</Modal.Header>
          <Modal.Body>
            <Receipt envelopes={this.state.envelopes} subtractTotal={this.subtractTotal}/>
          </Modal.Body>
          <Modal.Footer>
          <Button onClick={() => {this.handleModal3()}}>Close</Button>
          </Modal.Footer>
          </Modal>
        </aside>
        <EnvelopeList envelopes={this.state.envelopes} deleteEnvelope={this.deleteEnvelope} editEnvelope={this.editEnvelope}/>
        <footer className='footer'><Button className="aside-buttons" onClick={() => {this.handleModal()}}><i className="fas fa-plus"></i></Button><Button className="aside-buttons ml-2" onClick={() => {this.handleModal2()}}><i className="fas fa-chart-pie"></i></Button><Button className="aside-buttons ml-2" onClick={() => {this.handleModal3()}}><i className="fas fa-receipt"></i></Button></footer>
      </>
    )
  }
}
export default DashBoard;
