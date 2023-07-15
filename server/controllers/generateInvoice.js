import invoiceSchema from '../models/invoiceSchema.js';

export const generateInvoice = async(req, res) => {
    try {
        const [data] = req.body;
        // console.log(link);

        const newInvoice = new invoiceSchema(data);
        await newInvoice.save();
        res.status(201).json(data);

    } catch (err) {
        res.status(400).json({message: err.message});
    }
}