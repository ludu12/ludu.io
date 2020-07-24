// import axios from 'axios';
// const qs = require('querystring');

// const {
//   SPOTIFY_CLIENT_ID: client_id,
//   SPOTIFY_CLIENT_SECRET: client_secret,
// } = process.env;

// // const basic = Buffer.from(`${client_id}:${client_secret}`).toString('base64');

// // const getAccessToken = async () => {
// //     const response = await axios.post('https://accounts.spotify.com/api/token', qs.stringify({
// //         client_id,
// //         client_secret,
// //         grant_type: 'refresh_token'
// //     }), {
// //         headers: {
// //             'Content-Type': 'application/x-www-form-urlencoded',
// //         }
// //     });
// //     return response.data;
// // };

export const getCurrentlyPlaying = async () => {
  // const { access_token } = await getAccessToken();

  // const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
  //     headers: {
  //         Authorization: `Bearer ${access_token}`
  //     }
  // });

  return { song: 'Coming soon...' };
};
