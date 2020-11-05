import React, { Component } from "react";
import './CSS/EnvelopeList.css'


class EnvelopeItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEditing: false,
      name: this.props.envelope.name,
      money: this.props.envelope.money,
    }
    this.handleInput = this.handleInput.bind(this)
    this.toggleEdit = this.toggleEdit.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }
  handleInput(event){
    this.setState({[event.target.name]: event.target.value});
  }
  toggleEdit(){
    this.setState({isEditing: !this.state.isEditing});
  }
  handleSave(props){
    const updatedEnvelope = {
      name: this.state.name,
      money: this.state.money
  };
    this.props.editEnvelope(updatedEnvelope, this.props.envelope.id)
    this.toggleEdit();
  }
  render(){
    return(
      <>
      <div className="square shadow p-3 mb-5 rounded mr-2" style={{backgroundColor: this.props.color}}>
        <div>
          <span><button onClick={() => this.props.deleteEnvelope(this.props.envelope.id)}className="ml-2"style={{backgroundColor: this.props.color, border:'none', borderRadius: '18px'}}>x</button></span>
        </div>
        <div style={{textAlign: 'center'}}>
          {this.state.isEditing?
            <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleInput} required/>
            :<h3>{this.props.envelope.name}</h3>}
          <hr/>
          {this.state.isEditing?
            <input type="number"  min="0" id="money" name="money" value={this.state.money} onChange={this.handleInput} required/>
            :<p>${this.props.envelope.money}</p>}
        </div>
        {
          this.state.isEditing
          ? <button className="btn btn-link" onClick={this.handleSave} type='button'>Save</button>
          : <button className="btn btn-link" onClick={() => this.toggleEdit()}>Edit</button>
        }
      </div>
      </>
    )
  }
}





function EnvelopeList(props){
  const colors = ['#ebebeb', '#f5a25d', '#fa7f72', '#389393', '#d2d3c9', '#0e918c', '#f6830f', '#bb2205',];
  let index = 0;
  const envelopes = props.envelopes.map(envelope => {
    const color = colors[index];
    index === colors.length - 1 ? index = 0 : index++;
    return <EnvelopeItem key={envelope.id} envelope={envelope} deleteEnvelope={props.deleteEnvelope} editEnvelope={props.editEnvelope} color={color}/>
  })
  return(
    <div style={{display:'flex', flexWrap: 'wrap', justifyContent:'center'}}>
    {envelopes}
    </div>
  )
}
export default EnvelopeList;
