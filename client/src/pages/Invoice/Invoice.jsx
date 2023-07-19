import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../GenerateInvoice/GenerateInvoice.scss';
import './Invoice.scss';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import Card from '../../components/Card/Card';



const Invoice = () => {

  const [invoice, setinvoice] = useState([]);
  const [loading, setloading] = useState(true);

  

  const {id} = useParams();
  console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:8080/getInvoice/${id}`).then((data) => {
      setinvoice(data.data);
      setloading(false);
      console.log(invoice);
    })
  })
  if(loading){
    return (<h2>Loading...</h2>)
  }
  else{
    const items = invoice[0].elements;
    let sum = 0;
    let pieces=items.length;
    for(let i=0; i<items.length; i++){
      sum+=(items[i].price * items[i].pieces);
    }
  // console.log(items);
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
          <button className='submit-btn' id='submit'>SEND INVOICE TO CLIENT</button>
        </div>
        <Card sum={sum} pieces = {pieces}/>
      </div>
    </div>
  )}
}

export default Invoice