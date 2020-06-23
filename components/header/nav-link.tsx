import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';

const NavA = styled.a<{ active?: boolean }>`
  transition: all 0.25s;
  color: ${(props) =>
    props.active ? props.theme.main.secondary : props.theme.main.text};
  font-size: 2em;
  &:hover {
    color: ${(props) => props.theme.main.secondary};
  }
`;

const DynamicPath = styled.i`
  color: ${(props) => props.theme.main.secondary};
  font-size: 1.5em;
`;

interface NavLinkProps {
  text: string;
  href: string;
  emoji?: string;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const router = useRouter();

  // /page/path => ["", "page", "path"]
  const paths = router.asPath.split('/');
  const root = paths.slice(0, 2).join('/');
  const rest = paths.slice(2, paths.length);
  const isActive = props.href === root;

  return (
    <li>
      <Link href={props.href} passHref>
        <NavA active={isActive}>
          {props.emoji} {props.text}
        </NavA>
      </Link>
      {isActive && rest.length > 0 && (
        <DynamicPath> &#x2f; {rest.join('>')}</DynamicPath>
      )}
    </li>
  );
};

export default NavLink;
