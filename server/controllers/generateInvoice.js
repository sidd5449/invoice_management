import invoiceSchema from '../models/invoiceSchema.js';
import { createStandardPaymentLink } from '../utils/utils.js';

export const generateInvoice = async(req, res) => {
    try {
        const {data} = req.body;

        // CREATE RAZORPAY LINK AND ADD THE URL TO THE INVOICE DATA
        // const link = createStandardPaymentLink(data.amount, data.custId);

        const newInvoice = new invoiceSchema(data);
        await newInvoice.save();
        res.status(201).json('Invoice Created');

    } catch (err) {
        res.status(400).json({message: err.message});
    }
}