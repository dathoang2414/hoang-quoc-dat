import { Router } from 'express';
import resourceRoutes from '../modules/resource/resource.routes';

const router = Router();

router.use('/resources', resourceRoutes);

export default router;
