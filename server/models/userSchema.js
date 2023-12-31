import mongoose from 'mongoose';

const userModel = new mongoose.Schema(
    {
        id:{
            type:String,
            required:true,
        },
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        phoneNo: {
            type: String,
            required: true,
        },
        businessName: {
            type: String,
        },
        address:{
            type: String,
            required: true,
        },
        password:{
            type:String,
            required:true,
        }

    },{timestamps:true}

)

const userSchema = mongoose.model("User", userModel);
export default userSchema;