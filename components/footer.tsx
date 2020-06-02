import React from 'react';
import { Row, StyledLink } from './shared/shared-styled';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  margin-top: 2rem;
  padding: 0 5rem;
`;

export const SocialLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.main.text};
`;

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
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
      </Row>
    </FooterWrapper>
  );
};

export default Footer;
