import React from 'react';
import Layout from '../components/layout';
import { GetStaticProps } from 'next';
import { getLatestAudibleBook } from '../lib/books';
import { Book } from '../lib/types';
import styled from 'styled-components';

const StyledLink = styled.a`
  color: ${(props) => props.theme.main.primary};
`;

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = getLatestAudibleBook();
  return {
    props: {
      audibleBook,
    },
  };
};

interface HomeProps {
  audibleBook: Book;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout siteTitle="Home">
      <div>
        <h1>Hi, I'm Luke</h1>
        <p>
          I'm a Software Consultant from Des Moines. This is my personal website
          where I post about things I've done, thoughts I've had, and books I've
          read.
        </p>
        <p>
          Feel free to reach out on any of my social medias, or{' '}
          <StyledLink href="/contact">contact me</StyledLink> directly.
        </p>
        <p>
          My online resume can also be found{' '}
          <StyledLink href="/resume">here</StyledLink>
        </p>
      </div>

      {/*<div>*/}
      {/*  <h1>Audible</h1>*/}
      {/*  <p>*/}
      {/*    I listen to Audible a lot... This is what I'm currently listening to:*/}
      {/*  </p>*/}
      {/*  <BookCard book={props.audibleBook} />*/}
      {/*</div>*/}
    </Layout>
  );
};

export default Home;
