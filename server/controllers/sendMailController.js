import { sendMail } from "../utils/utils.js";
import userSchema from "../models/userSchema.js";

export const sendMailController = async(req, res) => {
    try {
        console.log(req.body);
        const { clientMail, sender, invoiceId } = req.body;
        const user = await userSchema.find({id: sender});
        console.log(user);
        sendMail(clientMail, user[0].name, invoiceId);
        res.status(200).json('Mail sent');
    } catch (err) {
        res.status(404).json({message:err.message})
    }

}