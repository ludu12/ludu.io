import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledLink = styled.a`
    &:hover {
        text-decoration: none;
    }
`;

const StyledSvg = styled.svg`
    fill: ${props => props.theme.main.primary};
`;

interface BrandProps {
}

const Brand: React.FC<BrandProps> = () => {
  return (
    <Link href="/" passHref>
      <a>
        <StyledSvg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
          <polygon points="0,0 0,200 200,200 0,0"/>
        </StyledSvg> ludu.io
      </a>
    </Link>
  );
};

export default Brand;
