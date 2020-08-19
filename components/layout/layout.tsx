import Head from 'next/head';
import React from 'react';
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
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { children, siteTitle } = props;
  return (
    <Container>
      <Head>
        <title>{siteTitle} - ludu.io</title>
      </Head>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
