import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { SpotifySong } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { Column, Italic, Item, Row, Strong } from '../shared-styled';
import Axios from 'axios';
import { useQuery } from 'react-query';

async function nowPlaying(): Promise<SpotifySong> {
  return (await Axios.get('/api/spotify/now-playing')).data;
}

async function recentlyPlayed(): Promise<SpotifySong[]> {
  return (await Axios.get('/api/spotify/recently-played')).data;
}

const SpotifyCard: React.FC = () => {
  const { data: now } = useQuery(['spotify', 'now-playing'], nowPlaying);
  const { data: recent } = useQuery(
    ['spotify', 'recently-played'],
    recentlyPlayed
  );

  const isPlaying = (s: SpotifySong) => Boolean(s?.isPlaying);
  const song = isPlaying(now) ? now : recent?.[0];

  return (
    <Item>
      <Card
        title={song?.isPlaying ? 'Now Playing' : 'Recently Played'}
        icon={<FaSpotify />}
      >
        <Row align="flex-start" justify="flex-start">
          <CoverArt cover={song?.albumCoverUrl} title={song?.album} />
          <Column>
            <a href={song?.url}>
              <Strong>{song?.title}</Strong>
            </a>
            <Italic>{song?.artist}</Italic>
          </Column>
        </Row>
      </Card>
    </Item>
  );
};

export default SpotifyCard;
