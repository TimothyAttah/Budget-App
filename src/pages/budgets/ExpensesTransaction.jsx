import React, { useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
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

const ExpensesTransaction = () => {
  const dispatch = useDispatch();
  const expenses = useSelector( state => state.expensesBudgets.budgets );
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
              <li key={ expense.id }>
                <h3>
                  { `${ expense.content }:` }
                  <span>{ `$ ${ expense.value }` }</span>
                </h3>
                <div>
                  <button onClick={ () => dispatch(deleteExpensesBudget( expense.id )) } type="button"><Icon name="trash" color="red" /></button>
                  <button type="button"><Icon name="edit" color="blue" /></button>
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

export default ExpensesTransaction;
