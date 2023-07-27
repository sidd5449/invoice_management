import invoiceSchema from "../models/invoiceSchema.js";


export const receiptController = async(req, res) => {
    console.log(req)
    try {
        const filePath = req.file.path;
        
        const id = req.body.id;
        const filter = {id:id};
        const upData = {
            $set:{
                receipt: filePath
            }
        }
        await invoiceSchema.updateOne(filter, upData);

        res.status(200).json(req);
    } catch (err) {
        res.status(204).json({message:err.message});
    }

} 