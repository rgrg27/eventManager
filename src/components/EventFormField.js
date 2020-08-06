import React, { Component } from 'react';



 
class EventFormField extends Component {
  render() {
    const fieldName = this.props.fieldName;
    const updatedFieldName = fieldName.split(/(?=[A-Z])/).map(s => s[0].toUpperCase()+s.slice(1)).join(' ');
    if(fieldName ==="description"){
      return (
        <div className="form-group">
          <label className="field-name">{updatedFieldName}:</label>
          <textarea type="text" className="form-control" rows="6" value={this.props.value} name={this.props.fieldName} 
          onChange={(e)=>this.props.onValueChange(e)} placeholder={"Enter "+updatedFieldName}/>
           {this.props.error.length > 0 && 
                <span className='error'>{this.props.error}</span>}
        </div>
      );
    }
    return (
        <div className="form-group">
          <label className="field-name">{updatedFieldName}:</label>
          <input type="text" className="form-control" value={this.props.value} name={this.props.fieldName} 
          onChange={(e)=>this.props.onValueChange(e)} placeholder={"Enter "+updatedFieldName}/>
          {this.props.error.length > 0 && 
                <span className='error'>{this.props.error}</span>}
        </div>
    );
  }
}

 export default EventFormField;



// export default connect(mapStateToProps,{addNote})(EventFormField);