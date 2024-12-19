import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '@/utils/db';
import Account from '@/app/model/Account';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      await dbConnect();

      const { id } = req.query;

      const product = await Account.findById(id);

      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }

      return res.status(200).json(product);
    } catch (error) {
      console.error('Error fetching product:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    return res.status(405).json({ message: 'Method not allowed' });
  }
}