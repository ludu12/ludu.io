import React from 'react';
import { FaGithub, FaLinkedin, FaRegEnvelope, FaTwitter } from 'react-icons/fa';

export const SocialLink: React.FC<React.HTMLProps<HTMLAnchorElement>> = (
  props
) => {
  const { children, ...rest } = props;
  return (
    <a className={'text-lg'} {...rest}>
      {children}
    </a>
  );
};

const Footer: React.FC = () => {
  return (
    <div className={'w-full mt-8 px-12'}>
      <div className={'flex flex-row justify-around'}>
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
      </div>
    </div>
  );
};

export default Footer;
