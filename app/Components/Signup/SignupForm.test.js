import React from "react";
import { shallow, mount, simulate } from "enzyme";
import { stub } from 'sinon';
import { renderWithStore } from "../../test.util";
import SignupFormWrapper,{SignupForm}  from './SignupForm';

describe("signup form", () => {
   //tocheck if there is a class SignupForm
  it("should render the wrapper properly", () => {
    const component = shallow(<SignupFormWrapper />);
    expect(component.find(SignupForm)).toBeDefined();
  });

  it('Test click event', () => {
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
     expect(
       component.find('input[type="text"][name="email"]').length
     ).toBe(1);
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

  {/*it("should render the component items properly", () => {
    // to check sign in button
    const component = shallow(<SignupForm handleSubmit={() => {}} />);
    expect(component.find(".createAccBtn")).toEqual('Submit');
  }); */}

  
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


  
  {/*   it('fires a login request action', () =>
      store
        .dispatch(login(
          { email: 'user@gmail.com', password: 'pass' },
          mockServiceCreator(REQUIRED_BODY),
        ))
        .then(() => expect(store.getActions()).toContainEqual({ type: LOGIN_VALUES })));


        const buildSubject = () => {
          onSave = sinon.stub().returns(onSaveResponse)
          const props = {
            onSave,
            submitting: submitting,
            // The real redux form has many properties for each field,
            // including onChange and onBlur handlers. We only need to provide
            // the ones that will change the rendered output.
            fields: {
              firstName: {
                value: '',
                touched: touched,
                error: error
              }
            },
            handleSubmit,
            reset
          }
          return shallow(<ContactFormComponent {...props}/>)
        } */}
      

});

describe('Create Account', () => {
  it('should call onsubmit', () => {
    const onSubmit = stub()
      .withArgs('email', 'password');
    const component = mount(<SignupForm  handleSubmit={onSubmit} /> );
    component.simulate('submit');
    expect(onSubmit.calledOnce).to.equal(true);
  });
}); 
