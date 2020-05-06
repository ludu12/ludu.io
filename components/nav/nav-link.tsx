import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledListItem = styled.li<{ emoji?: string }>`
    
    ${props => props.emoji ? 
      `&:before {
        content: "${props.emoji} ";
      }` :
      `&:before {
        content: "🏠 ";
      }`}
`;

const StyledLink = styled.a`
    color: ${props => props.theme.nav.text};
`;

interface NavLinkProps {
  text: string,
  href: string,
  emoji?: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  return (
    <StyledListItem emoji={props.emoji}>
      <Link href={props.href} passHref>
        <StyledLink>{props.text}</StyledLink>
      </Link>
    </StyledListItem>
  );
};

export default NavLink;
