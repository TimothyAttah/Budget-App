import React from 'react';
import styled from 'styled-components';
import Header from './components/Header';

const Main = styled.main`
 border: 2px solid red;
 width: 100%;
 max-width: 1200px;
 margin: 0 auto;
`;

const App = () => {
  return (
    <Main>
      <Header />
    </Main>
  );
};

export default App;
