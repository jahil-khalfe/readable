import React from 'react';
import styled from 'styled-components';
import AddButton from '../../components/AddButton';

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  background: #4A001F ;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

const AppTitle = styled.div`
  font-size: 2em;
  color: #A7C4C2;
  padding-left: 1em;
  text-shadow: 5px 5px #6A0F49, 5px 5px #6A0F49 ;
`;

const NavBar = () => (
  <Nav>
    <AppTitle>
      <h1>Readable</h1>
    </AppTitle>
    <AddButton>+</AddButton>
  </Nav>
);

export default NavBar;
