import React from 'react'
import { shallow } from 'enzyme'
import FooterDetail from './FooterDetail'
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";


Enzyme.configure({ adapter: new Adapter() });




describe('LoginPage component should render as expected and contains designer option', () => {

    it("should render the wrapper properly", () => {
  const component = shallow(<FooterDetail />)
  expect(component.contains('Designer ')).toBe(true)
});

it("should render the wrapper properly", () => {
    const component = shallow(<FooterDetail />)
    
    expect(component.contains('Designer ')).toBe(true)
  });



{/*with jest syntax
test('LoginPage component should render as expected', () => {
const component = shallow(<LoginPage />)
expect(component.contains(' Discover the one-stop shop that works for you. ')).toBe(true)}); */}

it("should render the wrapper properly , Government option", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Government ')).toBe(true)
  });

   it("should render the wrapper properly, Corporate option", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Corporate ')).toBe(true)
  });
 
   it("should render the wrapper properly, Small Business  option", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Small Business ')).toBe(true)
  });  

// to check whether our pages contains free shipping and discount options  
it("should render the wrapper properly, Free Shipping option", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Free Shipping')).toBe(true)
  });

   it("should render the wrapper properly, Discounts", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Discounts')).toBe(true)
  });


  it("should render the wrapper properly, Solutions for Government Buyers", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains(' Solutions for Government Buyers ')).toBe(true)
  });

  it("should render the wrapper properly, SUPPORTING OUR FEDERAL CUSTOMERS", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('SUPPORTING OUR FEDERAL CUSTOMERS')).toBe(true)
  });

  it("should render the wrapper properly,  SIMPLIFYING TAX EXEMPTION", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains(' SIMPLIFYING TAX EXEMPTION')).toBe(true)
  });

  it("should render the wrapper properly,Sign Up ", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Sign Up ')).toBe(true)
  });

  it("should render the wrapper properly,Key Features  ", () => {
    const component = shallow(<FooterDetail />)
    expect(component.contains('Key Features ')).toBe(true)
  });

});


