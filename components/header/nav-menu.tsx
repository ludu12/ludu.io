import React from 'react';
import styled from 'styled-components';
import NavLink from './nav-link';
import { Container } from 'next/app';

const NavModal = styled.div<{ hidden?: boolean }>`
  display: flex;
  top: 0;
  left: 0;
  position: fixed;
  width: 100%;
  height: 100%;
  transition: all 0.25s;
  opacity: ${(props) => (props.hidden ? '0' : '1')};
  visibility: ${(props) => (props.hidden ? 'hidden' : 'visibile')};
  background: ${(props) => props.theme.main.bg2};
`;

const StyledDiv = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 5em 0 0 0;
  max-width: 48em;
  margin: 0 auto 0;
`;

const NavList = styled.ul`
  list-style: none;
  padding-inline-start: 2em;
`;

interface NavMenuProps {
  hidden: boolean;
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  return (
    <NavModal hidden={props.hidden}>
      <StyledDiv>
        <NavList>
          <NavLink text="Home" href="/"/>
          <NavLink text="Books" href="/books"/>
          <NavLink text="Resume" href="/resume"/>
        </NavList>
      </StyledDiv>
    </NavModal>
  );
};

export default NavMenu;
