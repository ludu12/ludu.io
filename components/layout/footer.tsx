import React from 'react';
import { Row } from '../shared-styled';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 3rem;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.main.text};
  font-size: 1.2em;
`;

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Row justify="space-around">
        <SocialLink href="https://twitter.com/LukeDunscombe">
          <FiTwitter />
        </SocialLink>
        <SocialLink href="https://github.com/ludu12">
          <FiGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/luke-dunscombe-b9712a8b">
          <FiLinkedin />
        </SocialLink>
        <SocialLink href="mailto:luke@ludu.io">
          <FiMail />
        </SocialLink>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
