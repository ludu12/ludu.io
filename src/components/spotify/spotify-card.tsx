import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { SpotifySong } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { MainLink } from '../shared-styled';
import Axios from 'axios';
import { useQuery } from 'react-query';

async function nowPlaying(): Promise<SpotifySong> {
  return (await Axios.get('/api/spotify/now-playing')).data;
}

async function recentlyPlayed(): Promise<SpotifySong[]> {
  return (await Axios.get('/api/spotify/recently-played')).data;
}

const SpotifyCard: React.FC<{ initialSong: SpotifySong }> = (props) => {
  const { data: now } = useQuery(['spotify', 'now-playing'], nowPlaying);
  const { data: recent } = useQuery(
    ['spotify', 'recently-played'],
    recentlyPlayed,
    { initialData: [props.initialSong] },
  );

  const isPlaying = (s?: SpotifySong) => Boolean(s?.isPlaying);
  const song = isPlaying(now) ? now : recent?.[0];

  return (
    <Card
      title={song?.isPlaying ? 'Now Playing' : 'Recently Played'}
      icon={<FaSpotify/>}
    >
      <div className={'flex flex-row justify-start items-start'}>
        <CoverArt cover={song?.albumCoverUrl || ''} title={song?.album || ''}/>
        <div className={'flex flex-col'}>
          <MainLink
            className={'leading-tight hover:underline'}
            href={song?.url}
          >
            <strong>{song?.title}</strong>
          </MainLink>
          <span className={'italic text-sm text-gray-800'}>{song?.artist}</span>
        </div>
      </div>
    </Card>
  );
};

export default SpotifyCard;
