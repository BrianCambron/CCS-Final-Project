// import image from './../images/envelope.png';
import './EnvelopeList.css'

function EnvelopeItem(props){
  return(
    <>
    <div className="square">
      <h3>{props.envelope.name}</h3>
      <hr/>
      <p>${props.envelope.money}</p>
    </div>
    </>
  )
}





function EnvelopeList(props){
  const envelopes = props.envelopes.map(envelope => <EnvelopeItem key={envelope.id} envelope={envelope} deleteEnvelope={props.deleteEnvelope}/>)
  return(
    <div style={{display:'flex', flexWrap: 'wrap', marginLeft:'15%'}}>
    {envelopes}
    </div>
  )
}
export default EnvelopeList;
