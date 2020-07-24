import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ThemePropInterface } from '../../styles/theme';

const StyledLink = styled.a`
  transition: all 0.25s;
  color: ${(props: { theme: ThemePropInterface }) => props.theme.main.text};
  text-decoration: none;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    text-decoration: none;
  }
`;

// const StyledSvg = styled.svg`
//   transition: all 0.25s;
//   fill: ${(props) => props.theme.main.primary};
// `;

const Brand: React.FC = () => {
  return (
    <Link href="/">
      <StyledLink>ludu.io</StyledLink>
    </Link>
  );
};

export default Brand;
