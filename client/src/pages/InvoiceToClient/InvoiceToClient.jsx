import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import './InvoiceToClient.scss';
import '../Invoice/Invoice.scss';
import '../GenerateInvoice/GenerateInvoice.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card';


const InvoiceToClient = () => {
    const [invoice, setinvoice] = useState([]);
    const [loading, setloading] = useState(true);
    const [receipt, setreceipt] = useState();
    const invoiceId = useParams();
    console.log(invoiceId.id)
    console.log(receipt);

    useEffect(() => {
        axios.get(`http://localhost:8080/getInvoice/${invoiceId.id}`).then((data) => {
          setinvoice(data.data);
          setloading(false);
          console.log(invoice);
        })
    })

    const uploadReceipt = () => {
        const formdata = new FormData();
        formdata.append('id', invoiceId.id);
        formdata.append('receipt', receipt);
        axios.patch('http://localhost:8080/uploadReceipt', formdata).then(() => {
            toast.success("Receipt Uploaded! We will notify you once the invoice is marked as paid", {
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }

    if (loading) {
        return (<h1>Loading</h1>)
    }
    else {
        const items = invoice[0].elements;
        let sum = 0;
        let pieces=items.length;
        for(let i=0; i<items.length; i++){
            sum+=(items[i].price * items[i].pieces);
        }
        return (
            <div className="app__invoiceToClient">
                <Navbar />
                <div className="app__invoiceToClient-wrapper">
                    <Sidebar />
                    <div className="app__invoiceToClient-main">
                        {items.map((item) => (
                            <div className="app__invoice-main-item">
                                <h1>{item.name}</h1>
                                <div className="item-info">
                                    <p>{item.price} USD</p>
                                    <p>{item.pieces} Items</p>
                                </div>
                                <p id='price'>{item.price * item.pieces} USD</p>
                                <hr />
                            </div>
                        ))}
                        <div className="app__invoiceToClient-details">
                            <div className="app__details-to">
                                <h2>Billed To:</h2>
                                <h1 className='title'>{invoice[0].to}</h1>
                                <p>{invoice[0].clientBusiness}</p>
                                <p>Phone Number: {invoice[0].clientPhone}</p>
                                <p>Email: {invoice[0].clientEmail}</p>
                            </div>
                            <div className="app__details-by">
                                <h2>Billed By:</h2>
                                <h1 className='title'>{invoice[0].to}</h1>
                                <p>{invoice[0].clientBusiness}</p>
                                <p>Phone Number: {invoice[0].clientPhone}</p>
                                <p>Email: {invoice[0].clientEmail}</p>
                            </div>
                        </div>
                        <input type="file"  placeholder='Upload Receipt' onChange={(e) => {setreceipt(e.target.files[0])}}/>
                        <button className='submit-btn' id='submit' onClick={uploadReceipt}>SEND INVOICE TO CLIENT</button>
                    </div>
                    <Card sum={sum} pieces = {pieces}/>
                </div>
            </div>
        )
    }
}

export default InvoiceToClient