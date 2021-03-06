import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import AudibleCard from '../components/book/audible-card';
import Layout from '../components/layout/layout';
import { Column, Item, Row } from '../components/shared-styled';
import { getAudibleBook } from '../lib/audible';
import { AudibleBook } from '../lib/types';
import SpotifyCard from '../components/spotify/spotify-card';

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = await getAudibleBook();
  return {
    props: {
      audibleBook,
    },
  };
};

interface HomeProps {
  audibleBook: AudibleBook;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout siteTitle="Home">
      <h1>Hi, I'm Luke</h1>
      <main>
        <Column>
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
        </Column>
        <Row wrap>
          <Item>
            <AudibleCard book={props.audibleBook} />
          </Item>
          <Item>
            <SpotifyCard />
          </Item>
        </Row>
      </main>
    </Layout>
  );
};

export default Home;
