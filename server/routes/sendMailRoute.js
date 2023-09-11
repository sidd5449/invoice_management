import express from 'express';
import { sendMailController } from '../controllers/sendMailController.js';

const router = express.Router();

router.post('/', sendMailController);

export default router;