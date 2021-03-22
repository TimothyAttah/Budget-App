import React, { useEffect } from 'react';
import { Icon, Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';

import { listIncomeBudgets } from '../../redux/actions/incomeBudgetActions';

const MainWrapper = styled.ul`
width: 500px;
padding: 0;
margin: 0;
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

const IncomeTransaction = () => {
  const dispatch = useDispatch();
  useEffect( () => {
    dispatch( listIncomeBudgets() );
  }, [] );
  const incomes = useSelector( state => state.incomeBudgets.budgets );
  return (
    <MainWrapper>
      <h2>Income List Transaction</h2>
      <UlWrapper>
        { incomes.length ? (
          incomes.map( income => {
            return (
              <li key={ income.id }>
                <h3>
                  { `${ income.content }:` }
                  <span>{ `$ ${ income.value }` }</span>
                </h3>
                <div>
                  <Button type="button"><Icon name="trash" color="red" /></Button>
                  <Button type="button"><Icon name="edit" color="blue" /></Button>
                </div>
              </li>
            );
          } )
        ) : (
          <div><h2>You have no income transaction yet</h2></div>
        ) }
      </UlWrapper>
    </MainWrapper>
  );
};

export default IncomeTransaction;
