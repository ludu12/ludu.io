import React from 'react';
import Layout from '../components/layout/layout';
import { GetStaticProps } from 'next';
import { Book } from '../lib/types';
import Link from 'next/link';
import BookCard from '../components/book/book-card';
import { getAudibleBook } from '../lib/audible';

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = await getAudibleBook();
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
      <h1>Hi, I'm Luke</h1>
      <main>
        <div>
          <p>
            I'm a software consultant from Des Moines. This is my personal
            website where I post about things I've done, thoughts I've had, and
            books I've read.
          </p>
          <p>
            My online resume can also be found{' '}
            <Link href={'/resume'}>
              <a>here</a>
            </Link>
            .
          </p>
          <p>
            Feel free to reach out on any of my social medias, or{' '}
            <a href={'mailto:luke@ludu.io'}>contact me</a> directly.
          </p>
        </div>

        <div>
          <h1>Audible</h1>
          <p>
            I listen to Audible a lot... This is what I'm currently listening
            to:
          </p>
          <BookCard book={props.audibleBook} />
        </div>
      </main>
    </Layout>
  );
};

export default Home;
