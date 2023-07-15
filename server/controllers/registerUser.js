import userSchema from "../models/userSchema.js";
import { createCustomer } from "../utils/utils.js";

export const registerUser = async(req, res) => {
    try {
        const {name, email, phoneNo, businessName, address} = req.query;

        // console.log(customer);
        const newUserData = {
            name,
            email, 
            phoneNo, 
            businessName, 
            address, 
        };
        const newUser = new userSchema(newUserData);
        await newUser.save();
        res.status(201).json(newUserData);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}