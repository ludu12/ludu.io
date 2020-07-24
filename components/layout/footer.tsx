import React from 'react';
import { Row } from '../shared-styled';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';
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
          <FaTwitter />
        </SocialLink>
        <SocialLink href="https://github.com/ludu12">
          <FaGithub />
        </SocialLink>
        <SocialLink href="https://www.linkedin.com/in/luke-dunscombe-b9712a8b">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="mailto:luke@ludu.io">
          <FaRegEnvelope />
        </SocialLink>
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
