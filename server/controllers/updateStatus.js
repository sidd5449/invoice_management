import invoiceSchema from "../models/invoiceSchema.js";

export const updateStatus = async(req, res) => {
    try {
        const id = req.params;
        console.log(id);
        const upData = {
            $set:{
                status: true,
            }
        };
        await invoiceSchema.updateOne({id: id.id}, upData);
        const invoice = await invoiceSchema.findOne({id: id.id});
        console.log(invoice)
        if(invoice.status === true && invoice.statusByClient === true){
            const finData = {
                $set:{
                    finStatus: true,
                }
            }
            await invoiceSchema.updateOne({id: id.id}, finData)
        }
        res.status(201).json(upData);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}
export const updateStatusFromClient = async(req, res) => {
    try {
        const id = req.params;
        console.log(id);
        const upData = {
            $set:{
                statusByClient: true,
            }
        };
        await invoiceSchema.updateOne({id: id.id}, upData);
        res.status(201).json(upData);
    } catch (err) {
        res.status(404).json({message: err.message});
    }
}