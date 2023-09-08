import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import '../GenerateInvoice/GenerateInvoice.scss';
import './Invoice.scss';
import axios from 'axios';
import { useSelector } from 'react-redux';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card';
import ReviewComp from '../../components/ReviewComp/ReviewComp';
import { toast } from 'react-toastify';



const Invoice = () => {

  const [invoice, setinvoice] = useState([]);
  const [loading, setloading] = useState(true);
  const userId = useSelector((state) => state.user);

  

  const {id} = useParams();
  const location = useLocation();
  const isReviewing = new URLSearchParams(location.search).get("review");
  console.log(isReviewing);
  console.log(id);
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_ADD}/getInvoice/${id}`).then((data) => {
      setinvoice(data.data);
      setloading(false);
      console.log(invoice);
    })
  },[])
  if(loading){
    return (<h2>Loading...</h2>)
  }
  else if(invoice[0].from === userId){
    const items = invoice[0].elements;
    const fileUrl = invoice[0].receipt;
    let sum = 0;
    let pieces=items.length;
    for(let i=0; i<items.length; i++){
      sum+=(items[i].price * items[i].pieces);
    }

    const sendMail = () => {
      const formData = {
        clientMail: invoice[0].clientEmail,
        sender: invoice[0].from,
        invoiceId: invoice[0].id,
      }
      axios.post(`${process.env.REACT_APP_SERVER_ADD}/sendMail`, formData).then(() => {
        toast.success("Invoice Mailed", {
          position: toast.POSITION.TOP_RIGHT
        })
      }).catch((error) => {
        console.log(error);
        toast.error("Please fill all fields and ensure network connectivity", {
          position: toast.POSITION.TOP_RIGHT
        })
      })
    }
  // console.log(items);
  // if(invoice[0].from === id){
  return (
    <div className="app__invoice">
      <Navbar />
      <div className="app__invoice-wrapper">
        <Sidebar />
        <div className="app__invoice-main">
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
          <div className="app__invoice-main-payee">
            <h2>Billed To:</h2>
            <h1 className='title'>{invoice[0].to}</h1>
            <p>{invoice[0].clientBusiness}</p>
            <p>Phone Number: {invoice[0].clientPhone}</p>
            <p>Email: {invoice[0].clientEmail}</p>
          </div>
          {(isReviewing==='false')?(<button className='submit-btn' id='submit' onClick={sendMail}>SEND INVOICE TO CLIENT</button>):(<ReviewComp id={id} file={fileUrl} />)}
        </div>
        <Card sum={sum} pieces = {pieces}/>
      </div>
    </div>
  )}
  else{
    return(<p>You are not authorised to review this section.</p>)
  }
}

export default Invoice