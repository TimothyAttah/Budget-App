import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

const Form = styled.form`
margin: 30px 0;
  input, button {
    border: 2px solid red;
    outline-color: red;
    outline: none;
    padding: 10px;
    margin: 5px;
    border-radius: 10px;
  }
  #content {
    width: 400px;
  }
  #value {
    width: 200px;
  }
`;

const ExpensesTransactionForm = () => {
  return (
    <>
      <Form>
        <label><Icon name="minus" color="red" /></label>
        <input type="text" placeholder="Enter your transactions" id="content" />
        <input type="number" placeholder="value" id="value" />
        <Button type="button" color="red">
          <Icon name="checkmark" />
        </Button>
      </Form>
    </>
  );
};

export default ExpensesTransactionForm;
