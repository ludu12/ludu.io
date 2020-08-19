import { getCurrentlyPlaying } from '../../../lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { SpotifySong } from '../../../lib/types';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await getCurrentlyPlaying();
    const data = response.data;

    if (data && data.currently_playing_type === 'track') {
      const song: SpotifySong = {
        isPlaying: data.is_playing,
        album: data.item.album.name,
        title: data.item.name,
        artist: data.item.artists.map((a) => a.name).join(', '),
        albumCoverUrl: data.item.album.images[0].url,
        url: data.item.external_urls.spotify,
      };

      return res.status(200).json(song);
    }

    return res.status(response.status).json(response.data);
  } catch (error) {
    return res.status(error.response.status).json({ message: error.message });
  }
};
