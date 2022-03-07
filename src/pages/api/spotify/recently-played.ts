import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentlyPlayed } from '../../../lib/spotify';
import { cors } from '../../../lib/cors';
import axios from 'axios';

const recentlyPlayed = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  try {
    const { status, data } = await getRecentlyPlayed(5);
    return res.status(status).json(data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return res.status(error?.response?.status || 500).json({ message: error.message });
    }
    return res.status(500).json({ error });
  }
};

export default recentlyPlayed;
