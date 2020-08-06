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


  validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );
    return valid;
  }

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

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
          (isNaN(value))
            ? 'Price must be a positive numeric value'
            : '';
        break;
      case 'discount': 
        errors.discount = 
          isNaN(value)
            ? 'discount must be a numeric value'
            : '';
        break;
      default:
        break;
    }

    this.setState({errors, [name]: value});
  }
  handleValidation(name,value){
    const {errors} = this.state;
      switch (name) {
      case 'eventName': 
        errors.eventName = 
          value.length < 5
            ? 'Event Name must be atlest 5 characters long!'
            : '';
        this.setState({errors, [name]: value});
        return !(value.length < 5);
      case 'description': 
        errors.description = 
          value.length < 15
            ? 'Description must be atleast 15 characters long!'
            : '';
        this.setState({errors, [name]: value});
        return value.length < 15
      case 'price': 
        errors.price = 
          (isNaN(value) || value<0 || value=="")
            ? 'Price must be a positive numeric value'
            : '';
        this.setState({errors, [name]: value});
        return !(isNaN(value) || value<0 || value=="")
      case 'discount': 
        errors.discount = 
          isNaN(value) || value<0 || value==""
            ? 'discount must be a positive numeric value'
            : '';
          this.setState({errors, [name]: value});
        return !(isNaN(value) || value<0 || value=="")
      default:
        return true;
    }
    }
  handleSubmit(){
    const event = { 
      eventName: this.state.eventName,
      description: this.state.description,
      venue: this.state.venue,
      price: this.state.price,
      discount: this.state.discount,
    };
    const isValid = Object.entries(event).map(([name,value])=>{
      if(!this.handleValidation(name,value)){
        return false;
      }
      return true;
    })
    if(isValid && this.validateForm(this.state.errors)){
      this.props.addEvent(event);
      this.handleDiscard();
    }
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