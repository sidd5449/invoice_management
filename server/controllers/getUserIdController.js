import userSchema from "../models/userSchema.js";

export const getUserIdController = async(req, res) => {
    try {
        const {email} = req.params;
        const [user] = await userSchema.find({email:email});
        console.log(user);
        const id = user.id;
        res.status(200).json(id);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}