import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.theme.nav.text}
`;

interface NavLinkProps {
  text: string,
  href: string,
  emoji?: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <li>
      <Link href={props.href} passHref>
        <StyledLink>{props.text} {props.emoji}</StyledLink>
      </Link>
    </li>
  );
};

export default NavLink;
