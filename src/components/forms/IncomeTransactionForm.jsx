import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Icon, Button } from 'semantic-ui-react';

import { createIncomeBudget } from '../../redux/actions/incomeBudgetActions';

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
  const [ content, setContent ] = useState( '' );
  const [ values, setValues ] = useState( '' );
  const dispatch = useDispatch();
  const handleSubmit = ( e ) => {
    e.preventDefault();
    const newInc = {
      content,
      values: parseInt( values ),
    };
    dispatch( createIncomeBudget( newInc ) );
    setContent( '' );
    setValues( '' );
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <label><Icon name="plus" color="green" /></label>
        <input type="text" placeholder="Enter your transactions" id="content" value={ content } onChange={(e) => setContent(e.target.value)} />
        <input type="number" placeholder="value" id="value" value={ values } onChange={ ( e ) => setValues( e.target.value ) } />
        <Button type="submit" color="green">
          <Icon name="checkmark" />
        </Button>
      </Form>
    </div>
  );
};

export default IncomeTransactionForm;
