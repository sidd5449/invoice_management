import userSchema from "../models/userSchema.js";
import { v4 as uuidv4 } from 'uuid';

export const registerUser = async(req, res) => {
    try {
        const {name, email, phoneNo, businessName, address, password} = req.body;
        const uniqueId = uuidv4();
        // console.log(customer);
        const newUserData = {
            id: uniqueId,
            name,
            email, 
            phoneNo, 
            businessName, 
            address, 
            password
        };
        const newUser = new userSchema(newUserData);
        await newUser.save();
        res.status(201).json(newUserData);
    } catch (err) {
        res.status(400).json({message: err.message});
    }
}