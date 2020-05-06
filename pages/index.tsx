import React from 'react';
import Layout from '../components/layout';
import BookCard from '../components/book-card';
import { GetStaticProps } from 'next';
import { getLatestAudibleBook } from '../lib/books';
import { Book } from '../lib/types';

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = getLatestAudibleBook();
  return {
    props: {
      audibleBook,
    },
  };
};

interface HomeProps {
  audibleBook: Book,
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout siteTitle="Home">
      <div>
        <h1>Hi, I'm Luke 👋</h1>
        <p>I'm a Software Engineer from Des Moines.
          This is my personal website where I post about things I've done, thoughts I've had, and books I've
          read.</p>
        <p>My online resume can be found here</p>
      </div>

      <div>
        <h1>Audible</h1>
        <p>I listen to Audible a lot... This is what I'm currently listening to:</p>
        <BookCard book={props.audibleBook}/>
      </div>
    </Layout>
  );
};

export default Home;
