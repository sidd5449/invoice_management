import Razorpay from "razorpay";
import dotenv from 'dotenv';

dotenv.config();

const instance = new Razorpay({key_id: process.env.RAZORPAY_ID, key_secret: process.env.RAZORPAY_SECRET});

export const createCustomer = async(name, contact, email) => {
    const customer = instance.customers.create({
        name: name,
        contact: contact,
        email: email,
        fail_existing: 0,
    })
    return customer;
}

export const createStandardPaymentLink = async(amount, name, email, phNo, description) => {
            const link = instance.paymentLink.create({
                amount: amount*100,
                currency: 'USD',
                accept_partial: false,
                description: description,
                customer: {
                    name: name,
                    email: email,
                    contact: phNo, 

                },
                notify:{
                    sms: true,
                    email: true,
                },
                callback_url: 'https://google.com',
                callback_method: 'get',
            })
    
            return link;
    
}