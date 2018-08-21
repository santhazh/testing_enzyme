import React from 'react'
import { shallow } from 'enzyme'
import SignupForm from './SignupForm'
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";


Enzyme.configure({ adapter: new Adapter() });

test('new page', () => {
  const component = shallow(<SignupForm />)
  expect(component.contains('Create Account')).toBe(true)
});