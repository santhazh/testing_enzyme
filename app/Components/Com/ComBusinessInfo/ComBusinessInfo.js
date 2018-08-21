import React from 'react';
import Stepper from 'react-stepper-horizontal';
import { code , Navbar, Row, Col, Grid, Nav, NavItem, Radio, FormGroup} from 'react-bootstrap'; 
import { Router, Route } from 'react-router-dom';
import './ComBusinessInfo.css';
import SmallBusiness from './SmallBusiness/SmallBusiness';
import Corporation from './Corporation/Corporation';

export default class ComBusinessInfo extends React.Component {
    constructor() {
        super();
        // this.state = ({businessType: 'Corporation'});
      }

      render() {
          const { businessType, onBusinessTypeChange } = this.props;
        //   const { onSubmit } = this.props;
        return (
        <section className="MidContentWrap">
            <Row className="TabTxtWrap">
                <Col lg={12}>
                    <Radio name="businessType" checked={businessType =='Corporation' ? 'checked' : ''}
                    onChange={() => onBusinessTypeChange('Corporation')}><strong>Corporation </strong> (Corporation, Contractor, Education, Health Care,Real Estate) </Radio>
                    <Radio name="businessType" checked={businessType =='Small Business' ? 'checked' : ''} onChange={() => {onBusinessTypeChange('Small Business')}}><strong>Small Business </strong> (Designer, Hospitality, Dealership, Small Business Owner)</Radio>
                </Col>
            </Row>
            
            <div className="formOutterWrap">
                {businessType === 'Corporation' && <Corporation
                {...this.props}/>}
                {businessType === 'Small Business' && <SmallBusiness
                {...this.props}/>}
            </div>
            
        
        </section>
        )
    }
}