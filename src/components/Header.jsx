import React from 'react';
import styled, { css } from 'styled-components';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  h1, h4 {
     margin: 0;
    padding: 0;
  }

  h1 {
    font-size: 40px;
    color: lightgoldenrodyellow;
  }
 ${props => props.primary && css`
   margin: 0 auto;
   width: 400px;
 `}
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderWrapper primary>
        <h1>Budgets Tracker</h1>
        <h4>May 10th 2021</h4>
      </HeaderWrapper>
    </HeaderWrapper>
  );
};

export default Header;
