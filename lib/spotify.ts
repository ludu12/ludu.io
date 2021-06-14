import axios from 'axios';
import qs from 'querystring';
import { SpotifySong } from './types';

const getAccessToken = async () => {
  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    qs.stringify({
      client_id: process.env.SPOTIFY_CLIENT_ID,
      client_secret: process.env.SPOTIFY_CLIENT_SECRET,
      grant_type: 'refresh_token',
      refresh_token: process.env.SPOTIFY_CLIENT_REFRESH_TOKEN,
    }),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }
  );
  return response.data;
};

export async function getCurrentlyPlaying(): Promise<{
  status: number;
  data: SpotifySong;
}> {
  const { access_token } = await getAccessToken();
  const response = await axios.get(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

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
    return { status: 200, data: song };
  }
  return { status: response.status, data: response.data };
}

export async function getRecentlyPlayed(
  limit = 10
): Promise<{ status: number; data: SpotifySong[] }> {
  const { access_token } = await getAccessToken();
  const response = await axios.get(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );

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

    return { status: 200, data: songs };
  }

  return { status: response.status, data: response.data };
}
