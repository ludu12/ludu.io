import { getCurrentlyPlaying } from '../../lib/spotify';
import { NextApiRequest, NextApiResponse } from 'next';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const song = await getCurrentlyPlaying();
  return res.status(200).json(song);
};
