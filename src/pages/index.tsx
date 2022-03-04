import { GetStaticProps } from 'next';
import Link from 'next/link';
import React from 'react';
import AudibleCard from '../components/book/audible-card';
import Layout from '../components/layout/layout';
import { getAudibleBook } from '../lib/audible';
import { AudibleBook, SpotifySong } from '../lib/types';
import SpotifyCard from '../components/spotify/spotify-card';
import { getRecentlyPlayed } from '../lib/spotify';

export const getStaticProps: GetStaticProps = async () => {
  const audibleBook = await getAudibleBook();
  const spotifySong = (await getRecentlyPlayed(1)).data[0];
  return {
    props: {
      audibleBook,
      spotifySong,
    },
  };
};

interface HomeProps {
  audibleBook: AudibleBook;
  spotifySong: SpotifySong;
}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <Layout title="Home">
      <h1 className={'text-3xl font-bold'}>Hi, I&apos;m Luke</h1>
      <main>
        <div className={'flex flex-col'}>
          <p className={'my-4'}>
            I&apos;m a software consultant from Des Moines. This is my personal
            website where I post about things I&apos;ve done, thoughts I&apos;ve
            had, and books I&apos;ve read.
          </p>
          <p className={'my-4'}>
            My online resume can also be found{' '}
            <Link href={'/resume'}>
              <a>here</a>
            </Link>
            .
          </p>
          <p className={'my-4'}>
            Feel free to reach out on any of my social medias, or{' '}
            <a href={'mailto:luke@ludu.io'}>contact me</a> directly.
          </p>
        </div>
        <div className={'flex flex-row flex-wrap justify-between items-center'}>
          <div className={'flex-1'}>
            <AudibleCard book={props.audibleBook} />
          </div>
          <div className={'flex-1'}>
            <SpotifyCard initialSong={props.spotifySong} />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
