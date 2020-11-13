import React, { Component } from "react";
import Cookies from 'js-cookie';

class Receipt extends Component {
  constructor(props){
    super(props);
    this.state = {
      envelope: 0,
      total_amount: 0,
      image:null,
      preview:'',
      merchant_name: '',
    }
    this.handleImage = this.handleImage.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.uploadReceipt = this.uploadReceipt.bind(this)
  }

  async uploadReceipt(e, obj){
    e.preventDefault();
    const formData = new FormData()
    formData.append('envelope', this.state.envelope);
    formData.append('image', this.state.image);
    formData.append('merchant_name', this.state.merchant_name);
    formData.append('total_amount', this.state.total_amount);
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
      <form onSubmit={(e) => this.uploadReceipt(e, this.state)}>
        <label htmlFor="envelope">Choose an Envelope:</label>
        <select className="mb-2" name="envelope" id="envelope" onChange={this.handleInput} value={this.state.envelope}>
          {options}
        </select>
        <div className="form-group">
          <input className="form-control-file"type='file' id="avatar" name="avatar" onChange={this.handleImage}/>
          <img style={{width: '30%'}}src={this.state.preview} alt=''/>
        </div>
        <div>
          <label htmlFor='merchant_name'>Merchant Name</label>
          <input type='text' className="form-control" id="merchant_name" name="merchant_name" value={this.state.merchant_name} onChange={this.handleInput}/>
        </div>
        <button>Add Receipt</button>
      </form>
    )
  }
}
export default Receipt;
