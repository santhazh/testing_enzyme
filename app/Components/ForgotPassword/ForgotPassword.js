import React, { Component, Fragment } from 'react';
import { ControlLabel, FormGroup, FormControl, Button } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import { browserHistory } from 'react-router';
import './ForgotPassword.css';
import history from '../../history';

  const validate = (values) => {
    const error = {};
    
    if(!values.password) {
        error.password = "Required";
    }
    
    if(!values.confirmPassword) {
        error.confirmPassword = "Required";
    }

    if(values.password !== values.confirmPassword) {
        error.confirmPassword = "Please proivde correct password";
    }

    return error;
}

const renderField = ({ placeholder, input, label, type, meta: { touched, error }}) => (
    <div className="form-group">
      <label className="labelTxt">{label}</label>
      <input {...input} placeholder={placeholder} type={type} className="form-control" />
      {touched && ((error && (<span className="errorTxt">{error}</span>)))}
    </div>
  );

 class ForgotPassword extends Component {
    constructor() {
        super();
    }

    render() {
        const { handleSubmit, pristine, submitting, reset, dirty } = this.props;
        const handleSubmitForm = (values) => {
          console.info('FormValues', values);
          history.push('./login')
        };
        return(
        <div className="containInnerWrap">
            <div className="loginBoxWrap">
                <div className="loginBox">
                    <h1 className="title_h1 forgotTitle">Forgot Password
                        <span className="signInTxt">Enter a new password</span>   
                    </h1>
                                 
                    <form onSubmit={handleSubmit(handleSubmitForm)}>
                        <Field name="password" type="password" component={renderField} label="Create New Password" />
                        <Field name="confirmPassword" type="password" component={renderField} label="Confirm Password"/>
                        <div className="form-group">
                            <button className="btnSignIn"> Done </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }    
}

export default reduxForm({
    form: 'forgotPassword',
    validate,
  })(ForgotPassword);

