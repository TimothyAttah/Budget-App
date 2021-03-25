import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import { Icon } from 'semantic-ui-react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';

import { listExpensesBudgets, deleteExpensesBudget } from '../../redux/actions/expensesBudgetActions';

const MainWrapper = styled.ul`
width: 500px;padding: 0;
margin: 0;
padding: 0;
`;
const UlWrapper = styled.ul`
padding: 0;
margin: 0;
list-style: none;
li {
  margin: 15px 0;
  border: 2px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

li span, li button {
  margin-left: 10px;
}

li button {
 :hover {
    opacity: 0.7;
    cursor: pointer;
  }
}
li h3 {
  margin: 0;
  padding: 0;
}
`;

const ExpensesTransaction = ({ expenses, setCurrentId }) => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listExpensesBudgets() );
  }, [] );
  return (
    <MainWrapper>
      <h2>Expenses List Transaction</h2>
      <UlWrapper>
        { expenses.length ? (
          expenses.map( expense => {
            return (
              <li key={ expense._id }>
                <h3>
                  { `${ expense.content }:` }
                  <span>{ `$ ${ expense.values }` }</span>
                </h3>
                <div>
                  <button onClick={ () => dispatch( deleteExpensesBudget( expense._id ) ) } type="button"><Icon name="trash" color="red" /></button>
                  <button type="button" onClick={() => setCurrentId(expense._id)}><Icon name="edit" color="blue" /></button>
                </div>
              </li>
            );
          } )
        ) : (
          <div><h2>You have no expenses transaction yet</h2></div>
        ) }
      </UlWrapper>
    </MainWrapper>
  );
};

ExpensesTransaction.propTypes = {
  expenses: PropTypes.array.isRequired,
  setCurrentId: PropTypes.func
};

export default ExpensesTransaction;
