import invoiceSchema from "../models/invoiceSchema.js";

export const updateStatus = async(req, res) => {
    try {
        const [id] = req.params;
        const upData = {
            $set:{
                status: true,
            }
        };
        await invoiceSchema.updateOne({id: id}, upData);
        res.status(201).json(upData);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}