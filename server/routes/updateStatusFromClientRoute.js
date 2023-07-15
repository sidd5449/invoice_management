import express from 'express';
import { updateStatusFromClient } from '../controllers/updateStatus.js';

const router = express.Router();
router.patch('/:id', updateStatusFromClient);

export default router;