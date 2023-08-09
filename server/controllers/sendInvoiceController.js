import invoiceSchema from "../models/invoiceSchema.js";
import { sendInvoice } from "../utils/utils.js";

export const sendInvoiceController = async(req, res) => {
    try {
        const { id } = req.body;
        const invoice = await invoiceSchema.find({id:id});
        sendInvoice(invoice.clientEmail, invoice.from);
        sendInvoice(invoice.from, invoice.from);
        res.status(200).json('Mail Sent');
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}