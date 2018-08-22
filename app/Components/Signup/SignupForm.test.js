import React from "react";
import { shallow, mount } from "enzyme";
import { renderWithStore } from "../../test.util";
import SignupFormWrapper,{SignupForm}  from './SignupForm';

describe("signup form", () => {
  it("should render the wrapper properly", () => {
    const component = shallow(<SignupFormWrapper />);
    expect(component.find(SignupForm)).toBeDefined();
  });
  it("should render the component items properly", () => {
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.contains("Create Account")).toBe(true);
  });
  it("should render the mounted wrapper properly", () => {
    const component = renderWithStore(SignupFormWrapper);
    expect(component.find(SignupForm)).toBeDefined();
  });
  it("should email,passord and submit inputs in  the mounted wrapper properly", () => {
    //todo use common method renderWithStore
    const component = renderWithStore(SignupFormWrapper);
    //  expect(
    //   component.find('input[type="password"][name="password"]').length
    // ).toBe(1);    expect(
    //   component.find('input[type="password"][name="password"]').length
    // ).toBe(1);    expect(
    //   component.find('input[type="password"][name="password"]').length
    // ).toBe(1);

    //todo check for an button etc. from dom string generated
    expect(
      component.find('input[type="password"][name="password"]').length
    ).toBe(1);
  });
  it("should email,passord and submit form on click with entered input values", () => {
    const component = renderWithStore(SignupFormWrapper);
    console.log(component.debug());
    // see this ++++++++++ --------- >  : https://stackoverflow.com/questions/50464270/testing-redux-form-with-enzyme-3-and-adapter-react-16
  });
});
