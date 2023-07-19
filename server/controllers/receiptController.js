import invoiceSchema from "../models/invoiceSchema.js";


export const receiptController = async(req, res) => {
    try {
        const filePath = req.file.path;
        const {id} = req.body;
        const filter = {id:id};
        const upData = {
            $set:{
                receipt: filePath
            }
        }
        await invoiceSchema.updateOne(filter, upData);

        res.status(201).json(upData);
    } catch (err) {
        res.status(401).json({message:err.message});
    }

} 