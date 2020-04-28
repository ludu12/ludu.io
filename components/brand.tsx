import React from 'react';
import Link from 'next/link';
import { Row } from './shared-styled';
import styled from 'styled-components';

const StyledLink = styled.a`
    color: ${props => props.theme.main.primary};
    transition: all 0.25s;
       
    &:hover {
        text-decoration: none;
        color: ${props => props.theme.main.accent};
    }
`;

const StyledSvg = styled.svg`
    fill: ${props => props.theme.main.primary};
    transition: all 0.25s;
    
    ${StyledLink}:hover & {
     fill: ${props => props.theme.main.accent};
    }
`;


interface BrandProps {
}

const Brand: React.FC<BrandProps> = () => {
  return (
    <Row>
      <Link href="/" passHref>
        <StyledLink>
          <StyledSvg height="30" width="30" xmlns="http://www.w3.org/2000/svg">
            <polygon points="0,0 0,200 200,200"/>
          </StyledSvg>
          ludu.io
        </StyledLink>
      </Link>
    </Row>
  );
};

export default Brand;
