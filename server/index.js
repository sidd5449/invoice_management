import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import express from 'express';
import generateInvoiceRoute from './routes/generateInvoiceRoute.js';
import getInvoiceRoute from './routes/getInvoiceRoute.js';
import registerUserRoute from './routes/registerUserRoute.js';
import payInvoiceRoute from './routes/payInvoiceRoute.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());

// ROUTES
app.use('/generateInvoice', generateInvoiceRoute);
app.use('/getInvoice/', getInvoiceRoute);
app.use('/registerUser', registerUserRoute);
app.use('/payInvoice', payInvoiceRoute);

const PORT = process.env.PORT || 6001;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))