import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Button } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';

import { createExpensesBudget } from '../../redux/actions/expensesBudgetActions';

const Form = styled.form`
margin: 5px 0;
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
  const [ content, setContent ] = useState( '' );
  const [ values, setValues ] = useState( '' );
  const dispatch = useDispatch();
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newExp = {
      content,
      values: parseInt( values ),
      id: Math.random()
    };
    dispatch( createExpensesBudget( newExp ) );
    console.log(newExp);
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <label><Icon name="minus" color="red" /></label>
        <input type="text" placeholder="Enter your transactions" id="content" value={ content } onChange={ ( e ) => setContent( e.target.value ) } />
        <input type="number" placeholder="value" id="value" name="value" value={ values } onChange={ ( e ) => setValues( e.target.value ) } />
        <Button type="submit" color="red">
          <Icon name="checkmark" />
        </Button>
      </Form>
    </>
  );
};

export default ExpensesTransactionForm;
