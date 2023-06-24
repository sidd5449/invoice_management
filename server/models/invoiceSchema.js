import mongoose from 'mongoose';

const invoiceModel = new mongoose.Schema(
    {
        id:{
            type: String,
            required: true,
        },
        amount:{
            type: Number,
            required: true,
        },
        from: {
            type: Number,
            required: true,
        },
        to:{
            type: Number,
            required: true,
        },
        elements:[
            {
                name: String,
                price: Number,
                pieces: Number,
            }
        ],
        status: {
            type: Boolean,
            default: false,
        },
        toDate: {
            type: String,
            required: true,
        },
        genDate: {
            type: String,
            required: true,
        },
        rp_url: {
            type: String,
        }

    },{timestamps:true}

)

const invoiceSchema = mongoose.model("Invoice", invoiceModel);
export default invoiceSchema;