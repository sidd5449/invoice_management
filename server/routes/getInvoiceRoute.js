import express from 'express';
import { getInvoice } from '../controllers/getInvoice.js';

const router = express.Router();

router.get('/:id', getInvoice);

export default router;