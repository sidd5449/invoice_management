import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './GenerateInvoice.scss';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router-dom';

const GenerateInvoice = () => {
  const [name, setname] = useState('');
  const [price, setprice] = useState(0);
  const [quantity, setquantity] = useState(0);
  const [clientName, setclientName] = useState('');
  const [clientBusinessName, setclientBusinessName] = useState('');
  const [clientPhone, setclientPhone] = useState('');
  const [clientEmail, setclientEmail] = useState('');
  const [invoiceDate, setinvoiceDate] = useState('');
  const [arr, setarr] = useState([]);
  console.log(arr)

  const location = useLocation();
  const { uId } = location.state;
  const userId = '1230';
  // console.log(name, price, quantity);
  // TODO
  // include datetime, and userid from database

  const addToArray = () => {
    var newArr = {
      name: name,
      price: price,
      pieces: quantity,
    }
    setarr(arr => [...arr, newArr]);
  }

  const sendData = () => {
    const id = uuidv4();
    const invoiceData = [
      {
        id: id,
        from: uId,
        to: clientName,
        clientBusiness: clientBusinessName,
        clientPhone: clientPhone,
        clientEmail: clientEmail,
        elements: arr,
        toDate: invoiceDate,
        genDate: 'todaysDate',
        amount: 200,

      }

    ]
    axios.post(`${process.env.REACT_APP_SERVER_ADD}/generateInvoice`, invoiceData).then(() => {
      toast.success("Invoice Created!!", {
        position: toast.POSITION.TOP_RIGHT
      })
      window.location.href = `/invoice/${id}/?review=false`;
    }).catch((error) => {
      toast.error("Please fill all the fields and ensure network connectivity", {
        position: toast.POSITION.TOP_RIGHT
      })
      
    })
  }

  return (
    <div className="app_generateInvoice">
      <Navbar />
      <div className="app__generateInvoice-wrapper">
        <Sidebar />
        <div className="app__generateInvoice-main">
          <div className="app__invoice-addItems">
            <h1>Add Items</h1>
            <div className="app__inputs">
              <input type="text" placeholder='Product Name' className='first_input'onChange={(e) => {setname(e.target.value)}}/>
              <input type="number" placeholder='Price'onChange={(e) => {setprice(e.target.value)}}/>
              <input type="number" placeholder='Quantity'onChange={(e) => {setquantity(e.target.value)}}/>
            </div>
            <button onClick={addToArray}>ADD ITEM</button>
          </div>
          <div className="app__invoice-clientDetails">
            <h1>Client Details</h1>
            <div className="app__inputs">
              <input type="text" placeholder='Client Name' className='first_input'onChange={(e) => {setclientName(e.target.value)}}/>
              <input type="text" placeholder='Business Name' className='first_input'onChange={(e) => {setclientBusinessName(e.target.value)}}/>
              <input type="text" placeholder='Email Address' className='first_input'onChange={(e) => {setclientEmail(e.target.value)}}/>
              <input type="text" placeholder='Phone Number'onChange={(e) => {setclientPhone(e.target.value)}}/>
            </div>
          </div>
          <div className="app__invoice-validity">
            <h1>Invoice Validity</h1>
            <div className="app__invoice-validity-picker">
              <p>This invoice is valid till the following date:</p>
              <div className="app__inputs">
                <input type="date" name="date"onChange={(e) => {setinvoiceDate(e.target.value)}}/>
              </div>
            </div>
          </div>
          <button className='submit-btn' onClick={sendData}>GENERATE INVOICE</button>
        </div>
        <div className="app__generateInvoice-display">
        {(!arr)?(<p style={{color:"#FFFFFF"}}>Your Items</p>) : (
          
          <div className="app__display-wrapper">
            {arr.map((data) => (
            <div className="app__display-cards">
              <p className='product-title'>{data.name}</p>
              <div className="info">
                <p>{`${data.price} USD`}</p>
                <p>{data.pieces} Pieces</p>
              </div>
              <hr />
            </div>
            ))}
          </div>
        
        )}
        </div>
        
      </div>

    </div>
  )
}

export default GenerateInvoice