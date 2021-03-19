import React from 'react';
import { Icon, Button } from 'semantic-ui-react';

import styled from 'styled-components';

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

export const incomes = [
  {
    id: 1,
    content: 'Salary',
    value: 5000
  },
  {
    id: 2,
    content: 'Project',
    value: 3000
  },
  {
    id: 3,
    content: 'Gift',
    value: 2000
  },
  {
    id: 4,
    content: 'Class Work',
    value: 5000
  },
];

const IncomeTransaction = () => {
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
