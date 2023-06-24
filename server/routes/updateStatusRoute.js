import express from 'express';
import {updateStatus} from '../controllers/updateStatus.js';

const router = express.Router();

router.patch('/:id', updateStatus);

export default router;