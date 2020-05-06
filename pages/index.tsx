import React from 'react';
import Layout from '../components/layout';
import BookCard from '../components/book-card';
import { GetStaticProps } from 'next';
import { getLatestAudibleBook } from '../lib/books';
import { Book } from '../types';

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = getLatestAudibleBook();
  return {
    props: {
      audibleBook,
    },
  };
};

interface HomeProps {
  audibleBook: Book
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout siteTitle="Home">
      <div>
        <h1>Hi, I'm Luke 👋</h1>
        <p>I'm a Software Engineer from Des Moines.
          This is my personal website where I post about things I've done and books I've
          read.</p>
      </div>

      <div>
        <h1>Audible</h1>
        <BookCard book={props.audibleBook}/>
      </div>

      <div>
        <h1>Lastest Adventure</h1>
        <p>The last trip I went on was skiing in BigSky Montana</p>
      </div>
    </Layout>
  );
};

export default Home;
