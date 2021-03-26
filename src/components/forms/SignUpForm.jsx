import React from 'react';
import { Link } from 'react-router-dom';
import {
  Icon, Button
} from 'semantic-ui-react';
import styled from 'styled-components';

const FormWrapper = styled.div`
  width: 500px;
  height: auto;
  margin: 20px auto;
  label, input {
    width: 100%;
  }
  input {
    display: block;
    padding: 15px 10px;
    margin: 5px 0 20px 0;
    border: 1px solid #ccc;
    outline: none;
    border-radius: 10px;
    :focus{
      outline: 1px solid green;
    }
  }
  h3 {
    text-align: center;
  }
`;

const GoogleBox = styled.div`
  width: 100%;
  border: 1px solid red;
  padding: 15px 0;
  border-radius: 10px;
  font-size: 20px;
  text-align: center;
`;

const SignUpForm = () => {
  return (
    <div>
      <FormWrapper>
        <h1>Sign Up </h1>
        <form>
          <GoogleBox>Login with Google</GoogleBox>
          <h3>Or</h3>
          <label>First Name</label>
          <input
            type="text"
            placeholder="Enter first name..."
            name="firstName"
          />

          <label>Last Name</label>
          <input
            type="text"
            placeholder="Enter last name..."
            name="lastName"
          />
          <label>Email</label>
          <input
            type="email"
            placeholder="example@example.com"
            name="email"
          />
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password..."
            name="password"
          />
          <Button primary> <Icon name="sign in" /> Sign Up</Button>
          <h4>Already have an account? <span> <Link to="/user/sign-in">Sign In here</Link></span></h4>
        </form>
      </FormWrapper>
    </div>
  );
};

export default SignUpForm;
