import invoiceSchema from "../models/invoiceSchema.js";

export const invoiceByUserController = async(req, res) => {
    try {
        const userId = req.params;
        console.log(userId);
        const invoices = await invoiceSchema.find({from:userId.id});
        res.status(200).json(invoices);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}