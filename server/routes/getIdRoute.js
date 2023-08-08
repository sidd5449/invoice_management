import express from 'express';
import { getUserIdController } from '../controllers/getUserIdController.js';

const router = express.Router();

router.get('/:email', getUserIdController);

export default router;