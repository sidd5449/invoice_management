import express from 'express';
import { generateInvoice } from '../controllers/generateInvoice.js';

const router = express.Router();

router.post('/', generateInvoice);

export default router;