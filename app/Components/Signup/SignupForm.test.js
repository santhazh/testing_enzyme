import React from "react";
import { shallow, mount, simulate } from "enzyme";
import { renderWithStore } from "../../test.util";
import SignupFormWrapper, { SignupForm } from "./SignupForm";
jest.mock('../../history');
import history from "../../history";

describe("signup form", () => {
  //tocheck if there is a class SignupForm
  it("should render the wrapper properly", () => {
    const component = shallow(<SignupFormWrapper />);
    expect(component.find(SignupForm)).toBeDefined();
  });

  it("Test click event", () => {
    const page = <SignupForm />;
    const pageMounted = shallow(page);
    pageMounted.instance().onSubmitCall();
  });

  it("should render the component items properly", () => {
    //tocheck if there is a create Account in my Signupform
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.contains("Create Account")).toBe(true);
  });

  it("should email,passord and submit inputs in  the mounted wrapper properly", () => {
    //should display a text input to fill password , which is of input type email
    const component = renderWithStore(SignupFormWrapper);
    expect(
      component.find('input[type="password"][name="password"]').length
    ).toBe(1);
  });

  it("should email", () => {
    // to check email type is text
    const component = renderWithStore(SignupFormWrapper);
    expect(component.find('input[type="text"][name="email"]').length).toBe(1);
  });

  it("should render the component items properly", () => {
    //tocheck if there is a Already a member? option to user
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.contains("Already a member?")).toBe(true);
  });

  it("should render the component items properly", () => {
    //tocheck if there is a Already a member? option to user
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.contains("Sign In ")).toBe(true);
  });

  //checking

  {
    /*it("should render the component items properly", () => {
    // to check sign in button
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.find(".createAccBtn")).toEqual('Submit');
  }); */
  }

  // it("should render the mounted wrapper properly", () => {
  //   //to check whether redux store contains SignupForm
  //   const component = shallow(<SignupForm handleSubmit={() => {}} />);
  //   console.log(component.debug());
  //   expect(component.find(".createAccBtn")).toEqual('Create Account');
  // });

  //checking

  it("should render the mounted wrapper properly", () => {
    //to check whether redux store contains SignupForm
    const component = renderWithStore(SignupFormWrapper);
    expect(component.find(SignupForm)).toBeDefined();
  });

  it("should email,passord and submit form on click with entered input values", () => {
    //check the functionality
    const component = renderWithStore(SignupFormWrapper);
    //console.log(component.debug());
    // see ++++++++++ --------- >  : https://stackoverflow.com/questions/50464270/testing-redux-form-with-enzyme-3-and-adapter-react-16
  });
});

describe.only("Create Account", () => {
  beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  history.push.mockClear();
});

  it("should call submit with user entered data", () => {
    //mock function to test

    //** here onSubmitCall function in SignupForm implementation should not be an arrow function if not we cannot access it on prototype **
    const submitFn = jest.spyOn(SignupForm.prototype, "onSubmitCall");

    //Arrange
    var mockData = { email: "testUsername@gmail.com", password: "testPassword" };

    //Act
    const component = renderWithStore(SignupFormWrapper);
    const form = component.find("form").first();
    const input1 = form.find("FormControl").at(0);
    input1.simulate("change", { target: { value: mockData.email } });
    const input2 = form.find("FormControl").at(1);
    input2.simulate("change", { target: { value: mockData.password } });
    form.simulate("submit");

    //Assert
    expect(submitFn.mock.calls.length).toBe(1);
    expect(submitFn.mock.calls[0][0]).toEqual(mockData);
  });
  it("should navigate to government domain", () => {
    //Arrange 
    var mockData = { email: "testUsername@xyz.gov", password: "testPassword" };
    var mockDomain = "/gov";
    //Act

    SignupForm.prototype.onSubmitCall(mockData);
    //Assert
    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0][0]).toEqual(mockDomain);
  });
  it("should navigate to commercial domain", () => {
    //Arrange 
    var mockData = { email: "testUsername@xyz.com", password: "testPassword" };
    var mockDomain = "/com";
    //Act

    SignupForm.prototype.onSubmitCall(mockData);
    //Assert
    expect(history.push.mock.calls.length).toBe(1);
    expect(history.push.mock.calls[0][0]).toEqual(mockDomain);
  });
  it("should not navigate any domain if not com or gov", () => {
    //Arrange 
    var mockData = { email: "testUsername@xyz.invalidDomain", password: "testPassword" };

    //Act

    SignupForm.prototype.onSubmitCall(mockData);
    //Assert
    expect(history.push.mock.calls.length).toBe(0);
  });
  it("should handle errors like when email is null", () => {
    //Arrange 
    var mockData = null;
    var mockDomain = "/com";
    var mockData = { email: null, password: "testPassword" };
    
    //Assert
    //Act 

  //todo this currently fails fix it in the implentation of signupform
  expect(SignupForm.prototype.onSubmitCall(mockData)).toHaveBeenCalled();
  });
});
