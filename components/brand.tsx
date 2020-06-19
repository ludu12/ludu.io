import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { ThemePropInterface } from './styles/theme';

const StyledLink = styled.a`
  transition: all 0.25s;
  color: ${(props: { theme: ThemePropInterface }) => props.theme.main.text};
  text-decoration: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: ${(props: { theme: ThemePropInterface }) =>
      props.theme.main.secondary};
  }
`;

const StyledSvg = styled.svg`
  transition: all 0.25s;
  fill: ${(props) => props.theme.main.primary};
  ${StyledLink}:hover & {
    fill: ${(props) => props.theme.main.secondary};
  }
`;

interface BrandProps {}

const Brand: React.FC<BrandProps> = () => {
  return (
    <Link href="/">
      <StyledLink>
        <StyledSvg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 0,200 200,200 0,0" />
        </StyledSvg>{' '}
        ludu.io
      </StyledLink>
    </Link>
  );
};

export default Brand;
