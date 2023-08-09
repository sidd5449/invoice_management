import express from 'express';
import { sendMailController } from '../controllers/sendMailController.js';

const router = express.Router();

router.get('/', sendMailController);

export default router;