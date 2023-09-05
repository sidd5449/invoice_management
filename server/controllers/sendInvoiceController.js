import invoiceSchema from "../models/invoiceSchema.js";
import userSchema from "../models/userSchema.js";
import { invoiceTemplate } from "../utils/invoiceTemplate.js";
import pdf from 'html-pdf';
import puppeteer from "puppeteer";
import { sendInvoice, sendMail } from "../utils/utils.js";


export const sendInvoiceController = async(req, res) => {
    try {
        console.log(req.body);
        const [id] = req.body;
        console.log(id);
        const invoice = await invoiceSchema.find({id:id.id});
        console.log(invoice);
        const sender = await userSchema.find({id: invoice[0].from});
        console.log(sender);
        // console.log(invoice)
        const htmlTemp = invoiceTemplate(invoice, sender);
        // console.log(htmlTemp);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlTemp, {waitUntil: 'domcontentloaded'});
        await page.emulateMediaType('screen');

        const PDF = await page.pdf({
            path: `./public/receipts/${id.id}.pdf`,
            format: 'A4',
        })
        await browser.close();
        // pdf.create(htmlTemp, {}).toFile(`${invoice.id}.pdf`, (err) => {
        //     if(err) {
        //         res.send(Promise.reject());
        //     }
    
        //     res.send(Promise.resolve());
        // })
        sendInvoice(invoice[0].clientEmail, sender[0].name, id.id);


        res.status(200).json('Successful')
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}