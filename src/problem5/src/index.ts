import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import { setupSwagger } from './configs/swagger';
import routes from './routes';

dotenv.config({
  path: '.env',
});
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.redirect('/api/docs');
});

app.use('/api', routes);

setupSwagger(app);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
