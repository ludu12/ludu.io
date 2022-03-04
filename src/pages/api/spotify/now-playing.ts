import { getCurrentlyPlaying } from '../../../lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { cors } from '../../../lib/cors';

const nowPlaying = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  try {
    const { status, data } = await getCurrentlyPlaying();
    return res.status(status).json(data);
  } catch (error) {
    return res.status(error.response.status).json({ message: error.message });
  }
};

export default nowPlaying;
