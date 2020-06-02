import React, { useState } from 'react';
import BurgerMenuButton from './buger-menu-button';
import { Row } from './shared/shared-styled';
import Brand from './brand';
import NavMenu from './nav/nav-menu';
import DarkModeButton from './dark-mode-button';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Row>
        <Brand />
        <Row>
          <DarkModeButton />
          <BurgerMenuButton open={open} onClick={toggle} />
        </Row>
      </Row>
      <NavMenu hidden={!open} />
    </>
  );
};

export default Header;
