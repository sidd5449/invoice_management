import userSchema from "../models/userSchema.js";

export const loginController = async(req, res) => {
    try {
        const data = req.body;
        const user = await userSchema.findOne({email:data.email});
        const pass = user.password;
        console.log(user);
        console.log(pass);
        if(pass === data.password){
            res.status(200).json('successful');
        }
        else{
            res.status(404).json('failed')
        }
    
    } catch (err) {
        res.status(404).json({message:err.message})
    }

}