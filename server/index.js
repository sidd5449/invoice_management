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
import updateStatusFromClientRoute from './routes/updateStatusFromClientRoute.js'
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
app.patch('/uploadReceipt', upload.single('receipt'), receiptController);


const PORT = process.env.PORT;
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser:true,
    useUnifiedTopology: true,

}).then(() => {
    app.listen(PORT, () => console.log(`SERVER RUNNING ON PORT ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`))