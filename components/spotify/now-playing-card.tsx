import React from 'react';
import { FaSpotify } from 'react-icons/fa';
import { SpotifySong } from '../../lib/types';
import Card from '../common/card';
import CoverArt from '../common/cover-art';
import { Column, Italic, Item, Row, Strong } from '../shared-styled';

const NowPlayingCard: React.FC<{ song: SpotifySong }> = (props) => {
  const { song } = props;

  return (
    <Item>
      <Card title="Now Playing" icon={<FaSpotify />}>
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

export default NowPlayingCard;
