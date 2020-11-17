import React, { Component } from "react";
import Cookies from 'js-cookie';

class Receipt extends Component {
  constructor(props){
    super(props);
    this.state = {
      envelope: this.props.envelopes.length === 0? 0 : this.props.envelopes[0].id,
      total_amount: 0,
      image:null,
      preview:'',
      merchant_name: '',
    }
    this.handleImage = this.handleImage.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.readReceipt = this.readReceipt.bind(this);
    this.uploadReceipt = this.uploadReceipt.bind(this);
  }

  async readReceipt(e, obj){
    e.preventDefault();
    const formData = new FormData()
    formData.append('image', this.state.image);
    const options = {
      method:'POST',
      headers: {
        'X-CSRFToken': Cookies.get('csrftoken'),
        },
        body: formData,
      };
    const handleError = (err) => console.warn(err);
    const response = await fetch('/api/v1/envelopes/receiptreader/', options);
    const data = await response.json().catch(handleError);
    this.setState({total_amount: data.totalAmount.data, merchant_name: data.merchantName.data});
  }
  async uploadReceipt(e, obj){
    e.preventDefault();
    const options = {
      method:'POST',
      headers:{
        'X-CSRFToken': Cookies.get('csrftoken'),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }
    const handleError = (err) => console.warn(err);
    const response = await fetch('api/v1/envelopes/receipts/', options);
    const data = await response.json().catch(handleError);
    this.props.subtractTotal(data.envelope, data.total_amount)
  }

  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
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
    const options = this.props.envelopes.map(envelope => <option key={envelope.id} value={envelope.id}>{envelope.name}</option>);
    return(
      <>
      <form onSubmit={(e) => this.readReceipt(e, this.state)}>
        <label htmlFor="envelope">Choose an Envelope:</label>
          <select className="mb-2" name="envelope" id="envelope" onChange={this.handleInput} value={this.state.envelope}>
            {options}
          </select>
        <div className="form-group">
          <input style={{overflow:"hidden"}}className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
          <img className="mt-2"style={{width: '30%'}}src={this.state.preview} alt=''/>
        </div>
        <button className="btn btn-info">Read Receipt</button>
      </form>
      <hr/>
      <form onSubmit={(e) => {this.uploadReceipt(e, this.state); this.setState({merchant_name:'', total_amount:0})}}>
        <div>
          <label htmlFor='merchant_name'>Merchant Name</label>
          <input type='text' className="form-control" id="merchant_name" name="merchant_name" value={this.state.merchant_name} onChange={this.handleInput}/>
        </div>
        <div>
        <label htmlFor='total_amount'>Total Amount</label>
        <input type='number' min='0' className="form-control" id='total_amount' step='any' name='total_amount' value={this.state.total_amount} onChange={this.handleInput}/>
        </div>
        <button className="mt-2 btn btn-info">Add Receipt</button>
      </form>
      </>
    )
  }
}
export default Receipt;
