import React from 'react';
import { Row } from './shared-styled';
import { FiTwitter } from 'react-icons/fi';
import { FiGithub } from 'react-icons/fi';
import { FiLinkedin } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  padding: 0 1rem;
  margin: 3rem auto 6rem;
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
        <a href="mailto:dunscombe1@gmail.com">
          <FiMail/>
        </a>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
