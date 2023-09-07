import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import express from 'express';
import multer from "multer";
import { fileURLToPath } from "url";
import path from "path";
import generateInvoiceRoute from './routes/generateInvoiceRoute.js';
import getInvoiceRoute from './routes/getInvoiceRoute.js';
import registerUserRoute from './routes/registerUserRoute.js';
import updateStatusRoute from './routes/updateStatusRoute.js'
import loginRoute from './routes/loginRoute.js'
import updateStatusFromClientRoute from './routes/updateStatusFromClientRoute.js'
import getIdRoute from './routes/getIdRoute.js'
import invoiceByUserRoute from './routes/invoiceByUserRoute.js'
import getUserByIdRoute from './routes/getUserByIdRoute.js'
import sendMailRoute from './routes/sendMailRoute.js'
import sendInvoiceRoute from './routes/sendInvoiceRoute.js'
import pingRoute from './routes/pingRoute.js'
import { receiptController } from "./controllers/receiptController.js";



dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
app.use(express.json());
app.use(bodyParser.json({limit: "30mb", extended:true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors());
app.use('/public/assets', express.static(path.join(__dirname, 'public/assets')))
app.use('/public/receipts', express.static(path.join(__dirname, 'public/receipts')))


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "public/assets");
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})

const upload = multer({storage});

// ROUTES
app.use('/generateInvoice', generateInvoiceRoute);
app.use('/getInvoice/', getInvoiceRoute);
app.use('/registerUser', registerUserRoute);
app.use('/updateStatus', updateStatusRoute);
app.use('/updateStatusFromClient', updateStatusFromClientRoute);
app.use('/login', loginRoute);
app.use('/getUserId', getIdRoute);
app.use('/invoices', invoiceByUserRoute);
app.use('/user', getUserByIdRoute);
app.use('/sendMail', sendMailRoute);
app.use('/sendInvoice', sendInvoiceRoute);
app.use('/ping', pingRoute);
app.patch('/uploadReceipt', upload.single('receipt'), receiptController);


const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))