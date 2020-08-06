import React, { Component } from 'react';

import EventFormField from './EventFormField';

import {connect} from "react-redux";
import {addEvent} from "../redux/actions";

 
class EventEditor extends Component {
  constructor(props){
    super(props);
    this.state = {
    	eventName: "",
      description: "",
      venue: "",
      price: "",
      discount: "",
      errors:{
        eventName: "",
        description: "",
        venue: "",
        price: "",
        discount: "",
      }    
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDiscard = this.handleDiscard.bind(this);
  } 


  validateForm = () => {
    let valid = true;
    const errors = this.state.errors;
    const stateValues = Object.entries(this.state);
    stateValues.pop();
    for(let i=0; i<stateValues.length;i++){
      if(!this.validateIndividual(stateValues[i][0], stateValues[i][1])){
        return false;
      }
    }
    Object.values(errors).forEach(
      (val) => val.length > 0 && val!=="" && (valid = false)
    );
    return valid;
  }
  validateIndividual = (name, value)=>{
    const errors = this.state.errors;
    switch (name) {
      case 'eventName': 
        errors.eventName = 
          value.length < 5
            ? 'Event Name must be atlest 5 characters long!'
            : '';
        break;
      case 'description': 
        errors.description = 
          value.length < 15
            ? 'Description must be atleast 15 characters long!'
            : '';
        break;
      case 'price': 
        errors.price = 
          (isNaN(value) || value=="")
            ? 'Price must be a positive numeric value'
            : '';
        break;
      case 'discount': 
        errors.discount = 
          (isNaN(value) || value=="")
            ? 'discount must be a numeric value'
            : '';
        break;
      default:
        break;
    }
    this.setState({errors, [name]: value});
  }


  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;
    this.validateIndividual(name, value);
  }

  handleSubmit(){
  	const event = { 
  		eventName: this.state.eventName,
  		description: this.state.description,
  		venue: this.state.venue,
  		price: this.state.price,
  		discount: this.state.discount,
  	};
    if(this.validateForm()) {
      this.props.addEvent(event);
      this.handleDiscard();
    }else{
      console.error('Invalid Form')
    }
  	console.log(JSON.stringify(event));
  }
  handleDiscard(){
    this.setState({eventName: "", description: "", venue: "", price: "", discount: ""})
  }
  componentDidMount(){
    
  }
  render() {
    return (
        <div className="event-add">
          <div className="event-editor">
            <h5 className="">Create Event</h5>
            <div>
              <EventFormField fieldName="eventName" value = {this.state.eventName} 
               error={this.state.errors.eventName} onValueChange={(e) =>this.handleChange(e)}/>
              <EventFormField fieldName="description" value = {this.state.description} 
                error={this.state.errors.description} onValueChange={(e) =>this.handleChange(e)}/>
              <EventFormField fieldName="venue" value = {this.state.venue} 
                error={this.state.errors.venue} onValueChange={(e) =>this.handleChange(e)}/>
              <EventFormField fieldName="price" value = {this.state.price} 
                error={this.state.errors.price} onValueChange={(e) =>this.handleChange(e)}/>
              <EventFormField fieldName="discount" value = {this.state.discount} 
                error={this.state.errors.discount} onValueChange={(e) =>this.handleChange(e)}/>
            </div>
            <div className="button-group">
              <button type="submit" className="event-button form-submit" onClick={this.handleSubmit}>Submit</button>
              <button type="submit" className="event-button" onClick={this.handleDiscard}>Discard</button>
            </div>
          </div>
        </div>
    );
  }
}




 // export default EventEditor;



export default connect(null,{addEvent})(EventEditor);