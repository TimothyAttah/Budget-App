import React from 'react';
import styled from 'styled-components';
import Budget from './pages/budgets/Budget';

const Main = styled.main`
 border: 2px solid red;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
`;

const App = () => {
  return (
    <Main>
      <Budget />
    </Main>
  );
};

export default App;
