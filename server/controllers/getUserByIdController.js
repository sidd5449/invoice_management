import userSchema from "../models/userSchema.js";

export const getUserByIdController = async(req, res) => {
    try {
        const { id } = req.params;
        const user = await userSchema.find({id:id});
        res.status(200).json(user);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}