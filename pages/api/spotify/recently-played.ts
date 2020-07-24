import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentlyPlayed } from '../../../lib/spotify';
import { SpotifySong } from '../../../lib/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getRecentlyPlayed(5);
    const data = response.data;

    if (data && data.items) {
      const songs: SpotifySong[] = data.items.map((item) => {
        const track = item.track;
        return {
          isPlaying: false,
          album: track.album.name,
          title: track.name,
          artist: track.artists.map((a) => a.name).join(', '),
          albumCoverUrl: track.album.images[0].url,
          url: track.external_urls.spotify,
        };
      });
      return res.status(200).json(songs);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json({ message: error.message });
  }
};
