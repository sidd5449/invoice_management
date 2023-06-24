import invoiceSchema from "../models/invoiceSchema.js";

export const getInvoice = async(req, res) => {
    try {
        const [id] = req.params;
        const invoice = await invoiceSchema.find({id:id});
        res.status(200).json(invoice);
    } catch (err) {
        res.status(404).json({message: err.message});
    }


}