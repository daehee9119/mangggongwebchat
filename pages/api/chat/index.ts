import { NextApiResponseServerIO } from '@/types/chat';
import HttpStatus from 'http-status-codes';
import { NextApiRequest } from 'next';

export default (req: NextApiRequest, res: NextApiResponseServerIO) => {
  if (req.method === 'POST') {
    const message = req.body;
    // send client to socket channel "message"
    res.socket.server.io.emit('message', message);
    res.status(HttpStatus.CREATED).json(message);
  }
};
