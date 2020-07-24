/* eslint-disable */
// Disabling es lint because of camel case issue.. probably need to remove from config

import axios from 'axios';
import qs from 'querystring';

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

export async function getCurrentlyPlaying() {
  const { access_token } = await getAccessToken();
  return await axios.get(
    'https://api.spotify.com/v1/me/player/currently-playing',
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
}

export async function getRecentlyPlayed(limit = 10) {
  const { access_token } = await getAccessToken();
  return await axios.get(
    `https://api.spotify.com/v1/me/player/recently-played?limit=${limit}`,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
}
