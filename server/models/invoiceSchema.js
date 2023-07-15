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
            type: String,
            required: true,
        },
        to:{
            type: String,
            // required: true,
        },
        clientBusiness:{
            type: String,
            // required: true,
        },
        clientPhone:{
            type: String,
            // required: true,
        },
        clientEmail:{
            type: String,
            // required: true,
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
        statusByClient: {
            type: Boolean,
            default: false,
        },
        finStatus:{
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
        receipt: {
            type: String,
        }

    },{timestamps:true}

)

const invoiceSchema = mongoose.model("Invoice", invoiceModel);
export default invoiceSchema;