import React, { useState } from 'react';
import BurgerMenuButton from './buger-menu-button';
import { Row } from './shared/shared-styled';
import Brand from './brand';
import NavMenu from './nav/nav-menu';

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Row>
        <Brand/>
        <BurgerMenuButton
          open={open}
          onClick={toggle}
        />
      </Row>
      <NavMenu hidden={!open}/>
    </>
  );
};

export default Header;
