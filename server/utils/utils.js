import nodemailer from 'nodemailer';
import { mailTemplate } from './template.js';
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user:'sureinvoicemailer@gmail.com',
        pass: 'rmgryaycjpwzbboj'
    }
});

export const sendMail = (clientMail, sender, invoiceId) => {
    const mailOptions = {
        from: 'sureinvoicemailer@gmail.com',
        to: clientMail,
        subject: `Invoice from ${sender}`,
        html: mailTemplate(invoiceId, sender)
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err)
        }
        else{
            console.log('Email sent')
        }
    })
}
export const sendInvoice = (clientMail, sender, file) => {
    const mailOptions = {
        from: 'sureinvoicemailer@gmail.com',
        to: clientMail,
        subject: `Invoice from ${sender}`,
        attachments: [
            {
                filename: `${file}.pdf`,
                path: `./public/receipts/${file}.pdf`,
            }
        ],
    }
    transporter.sendMail(mailOptions, function(err, info){
        if(err){
            console.log(err)
        }
        else{
            console.log('Email sent')
        }
    })
}

