import { sendMail } from "../utils/utils.js";

export const sendMailController = async(req, res) => {
    try {
        const { clientMail, sender, invoiceId } = req.body;
        sendMail(clientMail, sender, invoiceId);
        res.status(200).json('Mail sent');
    } catch (err) {
        res.status(404).json({message:err.message})
    }

}