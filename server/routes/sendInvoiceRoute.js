import express from 'express';
import { sendInvoiceController } from '../controllers/sendInvoiceController.js';

const router = express.Router();

router.get('/', sendInvoiceController);

export default router;