import React from 'react';
import { NextSeo } from 'next-seo';
import Header from '../header/header';
import styled from 'styled-components';
import Footer from './footer';

const Container = styled.div`
  max-width: 48rem;
  padding: 0 1rem;
  margin: 3rem auto 2rem;
`;

interface LayoutProps {
  children: React.ReactNode;
  siteTitle?: string;
  url?: string;
  description?: string;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const {
    children,
    siteTitle = 'Luke Dunscombe',
    url = '',
    description = '',
  } = props;

  const URL = `https://ludu.io${url}`;
  return (
    <Container>
      <NextSeo
        title={`${siteTitle} - ludu.io`}
        description={description}
        canonical={URL}
        openGraph={{
          url: URL,
          title: siteTitle,
          description,
        }}
      />
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
