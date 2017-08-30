import React, {Component} from 'react';
import Modal from '../src/Modal';
import Button from '../src/Button';

class ModalForm extends Component {
  constructor(){
    super()
    this.state = {
      firstName: "",
      lastName: "",
      email: ""
    }
    
    handleChange = (event) => {
      var newState = {};
      newState[event.target.id] = event.target.value;
      this.setState(
        newState
        );
    }
    
    handleSubmit = (e) => {
      e.preventDefault();
      //your function
    }
    
    render(){
      return(
<Modal
	header='Modal Header'
	modalOptions={{ dismissible: false, ready: () => { console.log('ready'); } }}
	fixedFooter
  trigger={<Button className="mainBtn">MODAL</Button>}
  >
    <Row>
     <h5>First Name</h5>
      <Input type="text" id="firstName" value={this.state.firstName} onChange={this.handleChange}/>
	   <h5>Last Name</h5>
      <Input type="text" id="lastName" value={this.state.firstName} onChange={this.handleChange}/>
	   <h5>email</h5>
      <Input type="text" id="email" value={this.state.email} onChange={this.handleChange} />  
    <Button id="submitButton" type="submit" className="mainBtn" onClick={this.handleSubmit}>Submit</Button>

  <p>Press submit</p>
</Modal>

export default ModalForm
