import React, { useState } from 'react';
import styled from 'styled-components';
import { Row } from '../shared-styled';
import Brand from './brand';
import BurgerMenuButton from './buger-menu-button';
import NavMenu from './nav-menu';
import DarkModeButton from './dark-mode-button';

const Nav = styled.nav`
  margin: 0 auto 2.5em 0;
`;

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Row align="center">
        <Brand />
        <Row justify="flex-end">
          <DarkModeButton />
          <BurgerMenuButton open={open} onClick={toggle} />
        </Row>
      </Row>
      <NavMenu hidden={!open} />
    </Nav>
  );
};

export default Header;
