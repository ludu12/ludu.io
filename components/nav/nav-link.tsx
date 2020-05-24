import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const StyledLink = styled.a<{ active?: boolean }>`
    color: ${props => props.active ? props.theme.main.primary : props.theme.main.textInverse};
    font-size: 2em;
`;

interface NavLinkProps {
  text: string,
  href: string,
  emoji?: string
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const router = useRouter();

  return (
    <li>
      <Link href={props.href} passHref>
        <StyledLink active={router.pathname === props.href}>{props.emoji} {props.text}</StyledLink>
      </Link>
    </li>
  );
};

export default NavLink;
