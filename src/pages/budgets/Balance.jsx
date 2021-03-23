import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

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
  const incomes = useSelector( state => state.incomeBudgets.budgets );
  const expenses = useSelector( state => state.expensesBudgets.budgets );
  const incomeTransaction = incomes.map( data => data.values );
  const expenseTransaction = expenses.map( data => data.values );
  const totalIncome = incomeTransaction.reduce( ( value, result ) => value += result, 0 ).toFixed( 2 );
  const totalExpenses = expenseTransaction.reduce( ( value, result ) => value += result, 0 ).toFixed( 2 );
  const totalBalance = (totalIncome - totalExpenses).toFixed(2);
  return (
    <div>
      <h1>Balance: { totalBalance > 1 ? `+ $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` : ` $${ totalBalance.toString().replace( /\B(?=(\d{3})+(?!\d))/g, ',' ) }` }</h1>
      <IncomeExpenseBox>
        <h2>Total Income: <span> { totalIncome > 1 ? `+ $${ totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` : `$${ totalIncome.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` }</span></h2>
        <h2>Total Expenses: <span> {totalExpenses > 1 ? `- $${ totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` : `$${ totalExpenses.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') }` }</span></h2>
      </IncomeExpenseBox>
    </div>
  );
};

export default Balance;
