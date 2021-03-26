import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'semantic-ui-react';
import styled from 'styled-components';

const NavWrapper = styled.div`
 a {
   text-decoration: none;
   color: #fff;
 }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ButtonGroup primary size="large">
        <Button><Link to="/user/sign-up">Sign-Up</Link></Button>
        <Button><Link to="/user/sign-in">Sign-In</Link></Button>
      </ButtonGroup>
    </NavWrapper>
  );
};

export default Nav;
