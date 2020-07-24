import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import AudibleCard from '../components/book/audible-card';
import Layout from '../components/layout/layout';
import { Column, Row, Item } from '../components/shared-styled';
import NowPlayingCard from '../components/spotify/now-playing-card';
import { getAudibleBook } from '../lib/audible';
import { Book } from '../lib/types';
import { useQuery } from 'react-query';
import Axios from 'axios';
import { SpotifySong } from '../lib/types';
import RecentlyPlayed from '../components/spotify/recently-played-card';

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
  const { data: song } = useQuery(
    'now-playing',
    async (): Promise<SpotifySong> => {
      return (await Axios.get('/api/spotify/now-playing')).data;
    }
  );

  const { data: songs } = useQuery(
    'recently-played',
    async (): Promise<SpotifySong[]> => {
      return (await Axios.get('/api/spotify/recently-played')).data;
    }
  );

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
            {song ? (
              <NowPlayingCard song={song} />
            ) : (
              <RecentlyPlayed songs={songs} />
            )}
          </Item>
        </Row>
      </main>
    </Layout>
  );
};

export default Home;
