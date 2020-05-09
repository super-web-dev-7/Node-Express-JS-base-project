import {Router} from 'express';
import testRouter from './test.router';

const router = Router();

router.use('/test', testRouter);

export default router;
