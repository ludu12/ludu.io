import React from 'react';
import styled from 'styled-components';
import NavLink from './nav-link';

const NavModal = styled.div<{ hidden?: boolean }>`
    display: flex;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    transition: all 0.25s;
    opacity: ${(props) => props.hidden ? '0' : '1'};
    visibility: ${(props) => props.hidden ? 'hidden' : 'visibile'};
    background: ${props => props.theme.main.bgInverse}
`;

const Nav = styled.nav`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 5em 0 0 0;
`;

const NavList = styled.ul`
    list-style: none;
`;

interface NavMenuProps {
  hidden: boolean
}

const NavMenu: React.FC<NavMenuProps> = (props) => {
  return (
    <NavModal hidden={props.hidden}>
      <Nav>
        <NavList>
          <NavLink text='Home' href='/'/>
          {/*<NavLink text='Books' href='/books'/>*/}
          <NavLink text='Contact Me' href='/contact'/>
          <NavLink text='Resume' href='/resume'/>
          {/*<NavLink text='Home' href='/' emoji={`🏠`}/>*/}
          {/*<NavLink text='Posts' href='/posts' emoji={`✍🏼`}/>*/}
          {/*<NavLink text='Books' href='/books' emoji={`📚`}/>*/}
          {/*<NavLink text='Contact Me' href='/contact' emoji={'💌️'}/>*/}
          {/*<NavLink text='Resume' href='/resume' emoji={'📜'}/>*/}
        </NavList>
      </Nav>
    </NavModal>
  );
};

export default NavMenu;
