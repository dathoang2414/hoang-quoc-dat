import dotenv from 'dotenv';
import express, { Request, Response } from 'express';

dotenv.config({
  path: '.env',
});
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello world!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
