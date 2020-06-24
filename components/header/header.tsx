import React, { useState } from 'react';
import BurgerMenuButton from './buger-menu-button';
import { Row } from '../shared-styled';
import Brand from './brand';
import NavMenu from './nav-menu';
import DarkModeButton from './dark-mode-button';
import styled from 'styled-components';

interface HeaderProps {}

const Nav = styled.nav`
  margin: 0 auto 2.5em 0;
`;

const Header: React.FC<HeaderProps> = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <Nav>
      <Row align={'flex-end'}>
        <Brand />
        <Row>
          <DarkModeButton />
          <BurgerMenuButton open={open} onClick={toggle} />
        </Row>
      </Row>
      <NavMenu hidden={!open} />
    </Nav>
  );
};

export default Header;
