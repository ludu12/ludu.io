import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import BurgerMenuButton from './buger-menu-button';

const Row = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
`;

const Modal = styled.div`
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: .9;
    background: ${props => props.theme.colors.primary}
`;

const Header: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);

  const toggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <Row>
        <Link href="/">
          <a>ludu.io</a>
        </Link>
        <BurgerMenuButton
          open={open}
          onClick={toggle}
        />
      </Row>
      {open &&
      <Modal>
        <Link href='/posts'>
          <a>Posts</a>
        </Link>
        <Link href='/books'>
          <a>books</a>
        </Link>
      </Modal>}
    </>
  );
};

export default Header;
