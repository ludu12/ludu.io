// import axios from 'axios';
// const qs = require('querystring');
// import SpotifyWebApi from 'spotify-web-api-node';

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

// // credentials are optional
// const spotifyApi = new SpotifyWebApi({
//   clientId: '1767c92bae474a7b957957ce1dc6fe85',
//   clientSecret: '6674636c508841b091621e6be313e856',
// });

// export const getCurrentlyPlaying = async () => {
//   // const { access_token } = await getAccessToken();

//   // const response = await axios.get('https://api.spotify.com/v1/me/player/currently-playing', {
//   //     headers: {
//   //         Authorization: `Bearer ${access_token}`
//   //     }
//   // });

//   const song = await spotifyApi.getMyCurrentPlaybackState();

//   return song;
// };
