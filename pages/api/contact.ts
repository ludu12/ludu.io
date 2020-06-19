import { NextApiRequest, NextApiResponse } from 'next';
import fetch from 'node-fetch';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body.email && req.body.message) {
    const response = await fetch('https://formspree.io/xlepryvl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body),
    });
    const json = await response.json();

    res.status(response.status).json({ ...json });
  } else {
    res.status(400).json({ message: 'Email and Message are required in body' });
  }
};
