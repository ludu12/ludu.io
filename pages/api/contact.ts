import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.email && req.body.message) {
    const response = await axios.post(
      'https://formspree.io/xlepryvl',
      req.body
    );
    res.status(response.status).json({ ...response.data });
  } else {
    res.status(400).json({ message: 'Email and Message are required in body' });
  }
};
