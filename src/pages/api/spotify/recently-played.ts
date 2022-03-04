import { NextApiRequest, NextApiResponse } from 'next';
import { getRecentlyPlayed } from '../../../lib/spotify';
import { cors } from '../../../lib/cors';

const recentlyPlayed = async (req: NextApiRequest, res: NextApiResponse) => {
  await cors(req, res);

  try {
    const { status, data } = await getRecentlyPlayed(5);
    return res.status(status).json(data);
  } catch (error) {
    return res.status(error.response.status).json({ message: error.message });
  }
};

export default recentlyPlayed;
