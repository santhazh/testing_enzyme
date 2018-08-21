import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter,Link } from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Field, reduxForm,reset } from 'redux-form';
import './Corporation.css';
import history from '../../../../history';

  const required = value => (value || typeof value === 'number' ? undefined : 'Required');
  const maxLength = max => value => (value && value.length > max ? `Must be ${max} characters or less` : undefined);
  const maxLength15 = maxLength(15);
  export const minLength = min => value => (value && value.length < min ? `Must be ${min} characters or more` : undefined);
  export const minLength2 = minLength(2);
  
  class FieldFileInput  extends Component{
      constructor(props) {
          super(props)
          this.onChange = this.onChange.bind(this)
      }
  
      onChange(e) {
          const { input: { onChange } } = this.props
          onChange(e.target.files[0])
      }
  
    render(){
      const { input: { value } } = this.props
      const {input,label, required, meta, } = this.props  //whatever props you send to the component from redux-form Field
      return(
        
        <div>
          <label>{label}</label>
          <div className="file">
              <input
                type='file'
                id="file-input"
                accept='.jpg, .png, .jpeg, .pdf, .txt'
                onChange={this.onChange} />
              <label htmlFor="file-input">Browse <i className="fa fa-paperclip browseicon"></i></label>
          </div>
        </div>
      )
    }
  }

  const renderField = ({input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} type={type} className="form-control SqaureText" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );
  
  const Corporation = (props) => {
    const {
      handleSubmit, pristine, reset, submitting, submitCase,
    } = props;
  

    return (
     <div className="formOutterWrap">
     <form className="yourname form-style" onSubmit={handleSubmit} >
        <Field
          className="names"
          name="yourName"
          type="text"
          component={renderField}
          label="Your Name"
          validate={[required, maxLength15, minLength2]}
        />
        <Field
          name="businessName"
          type="text"
          component={renderField}
          label="Business Name"
          validate={[required, maxLength15, minLength2]}
        /></form><br/>
        
          <p >Please upload any supporting documents that validate your business information. Please note verification of these documents can take up to 24 hours. 
          <br/> <br/> <b>Supported documents include:</b> Resale certificate, Business License, Professional license or permit, State tax exemption, Membership document</p>

        <form className="yourname form-style" onSubmit={handleSubmit}>
        <Field 
          name="uploadFile"
          component={FieldFileInput}
       />  
        <div className="formBtnWrap">
        <button className="formBtn" type="button" onClick={(e) => reset(history.push('/login'))} >Back</button>
          <button className="formBtn" type="submit" disabled={submitting}>Next</button>
        </div>
      </form>
      </div>
    );
  };  

export default reduxForm({
    form: 'Com', // a unique identifier for this form
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
    enableReinitialize: true,
  })(Corporation);