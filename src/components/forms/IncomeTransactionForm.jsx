import React from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';

const Form = styled.form`
  input, button {
    border: 2px solid green;
    outline-color: green;
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

const IncomeTransactionForm = () => {
  return (
    <div>
      <Form>
        <label><Icon name="plus" color="green" /></label>
        <input type="text" placeholder="Enter your transactions" id="content" />
        <input type="number" placeholder="value" id="value" />
        <Button type="button" color="green">
          <Icon name="checkmark" />
        </Button>
      </Form>
    </div>
  );
};

export default IncomeTransactionForm;
