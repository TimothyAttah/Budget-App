import React from 'react';
import styled from 'styled-components';

import { incomes } from './IncomeTransaction';
import { expenses } from './ExpensesTransaction';

const IncomeExpenseBox = styled.div`
  h2 {
    margin: 0;
  padding: 0;
  }
  span {
    margin-left: 10px;
  }
`;

const Balance = () => {
  const incomeTransaction = incomes.map( data => data.value );
  const expenseTransaction = expenses.map( data => data.value );
  const totalIncome = incomeTransaction.reduce( ( value, result ) => value += result ).toFixed( 2 );
  const totalExpenses = expenseTransaction.reduce( ( value, result ) => value += result ).toFixed( 2 );
  const totalBalance = (totalIncome - totalExpenses).toFixed(2);
  return (
    <div>
      <h1>Balance: { `+ $${ totalBalance }` }</h1>
      <IncomeExpenseBox>
        <h2>Total Income: <span> { `+ $${ totalIncome }` }</span></h2>
        <h2>Total Expenses: <span> { `- $${ totalExpenses }` }</span></h2>
      </IncomeExpenseBox>
    </div>
  );
};

export default Balance;
