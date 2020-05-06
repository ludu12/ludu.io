import React from 'react';
import { Row } from './shared/shared-styled';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 5rem;
`;

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <FooterWrapper>
      <Row justify='space-around'>
        <a href="https://twitter.com/LukeDunscombe">
          <FiTwitter/>
        </a>
        <a href="https://github.com/ludu12">
          <FiGithub/>
        </a>
        <a href="https://www.linkedin.com/in/luke-dunscombe-b9712a8b">
          <FiLinkedin/>
        </a>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
