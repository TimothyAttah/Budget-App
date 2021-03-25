import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
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
      <Router>
        <Route path="/" exact component={Budget} />
      </Router>
    </Main>
  );
};

export default App;
