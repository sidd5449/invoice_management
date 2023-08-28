import invoiceSchema from "../models/invoiceSchema.js";
import { invoiceTemplate } from "../utils/invoiceTemplate.js";
import pdf from 'html-pdf';
import puppeteer from "puppeteer";


export const sendInvoiceController = async(req, res) => {
    try {
        const {id} = req.body;
        const invoice = await invoiceSchema.find({id:id});
        // console.log(invoice)
        const htmlTemp = invoiceTemplate(invoice);
        console.log(htmlTemp);
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.setContent(htmlTemp, {waitUntil: 'domcontentloaded'});
        await page.emulateMediaType('screen');

        const PDF = await page.pdf({
            path: './test.pdf',
            format: 'A4',
        })
        await browser.close();
        // pdf.create(htmlTemp, {}).toFile(`${invoice.id}.pdf`, (err) => {
        //     if(err) {
        //         res.send(Promise.reject());
        //     }
    
        //     res.send(Promise.resolve());
        // })


        res.status(200).json('Successful')
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}