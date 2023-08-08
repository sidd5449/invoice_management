import express from 'express';
import { invoiceByUserController } from '../controllers/invoiceByUserController.js';

const router = express.Router();

router.get('/:id', invoiceByUserController);

export default router;