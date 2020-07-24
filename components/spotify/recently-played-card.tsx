import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { SpotifySong } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { Column, Italic, Item, Row, Strong } from '../shared-styled';

const RecentlyPlayed: React.FC<{ songs: SpotifySong[] }> = (props) => {
  const { songs } = props;
  if (!songs) {
    return null;
  }

  // TODO: Make this different from Now Playing
  const song = songs[0];

  return (
    <Item>
      <Card title="Recently Played" icon={<FaSpotify />}>
        <Row align="flex-start" justify="flex-start">
          <CoverArt cover={song.albumCoverUrl} title={song.album} />
          <Column>
            <Strong>{song.title}</Strong>
            <Italic>{song.artist}</Italic>
          </Column>
        </Row>
      </Card>
    </Item>
  );
};

export default RecentlyPlayed;
