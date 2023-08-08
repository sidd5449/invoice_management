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
    const [loading1, setloading1] = useState(true);
    // const [loading2, setloading2] = useState(true);
    const [receipt, setreceipt] = useState();
    const [user, setuser] = useState()
    const invoiceId = useParams();
    console.log(user)
    console.log(invoice);

    useEffect(() => {
        axios.get(`http://localhost:8080/getInvoice/${invoiceId.id}`).then((data) => {
          setinvoice(data.data);
          axios.get(`http://localhost:8080/user/${invoice[0].from}`).then((data) => {
            setuser(data.data);
        })
        })
        if(invoice && user){
            setloading1(false);
        }

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

    if (loading1) {
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
                                <h1 className='title'>{user[0].name}</h1>
                                <p>{user[0].businessName}</p>
                                <p>Phone Number: {user[0].phoneNo}</p>
                                <p>Email: {user[0].email}</p>
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