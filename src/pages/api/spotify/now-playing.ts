import { getCurrentlyPlaying } from '../../../lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';
import { cors } from '../../../lib/cors';
import axios, { AxiosError } from 'axios';

const nowPlaying = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  try {
    const { status, data } = await getCurrentlyPlaying();
    return res.status(status).json(data);
  } catch (error: unknown | AxiosError) {
    if (axios.isAxiosError(error)) {
      return res.status(error?.response?.status || 500).json({ message: error.message });
    }
    return res.status(500).json({ error });
  }
};

export default nowPlaying;
