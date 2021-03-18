import React from 'react';
import styled from 'styled-components';

import IncomeTransactionForm from '../../components/forms/IncomeTransactionForm';
import ExpensesTransactionForm from '../../components/forms/ExpensesTransactionForm';
import IncomeTransaction from './IncomeTransaction';
import ExpensesTransaction from './ExpensesTransaction';
import Header from '../../components/Header';

const TopSection = styled.section`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 background: linear-gradient(45deg,rgba(255,0,0,0), rgba(0,0,255,1));
  h2 {
    margin: 50px 0px;
    color: #fff;
  }
`;

const ListSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 50px 20px;
`;

const Budget = () => {
  return (
    <>
      <TopSection>
        <Header />
        <h2>Total Budget: +$10,000.00</h2>
        <IncomeTransactionForm />
        <ExpensesTransactionForm />
      </TopSection>
      <ListSection>
        <IncomeTransaction />
        <ExpensesTransaction />
      </ListSection>
    </>
  );
};

export default Budget;
