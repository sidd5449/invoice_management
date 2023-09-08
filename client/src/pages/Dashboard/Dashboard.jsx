import React, { useEffect, useState } from 'react';
import './Dashboard.scss';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Dashboard = () => {
  const [user, setuser] = useState(null);
  const idFormParams  = useParams();  
  // COMPARE THIS WITH ID FROM STATE AND RENDER COMP ONLY IF BOTH ARE EQUAL
  const userId = useSelector((state) => state.user);
  const [userInvoices, setuserInvoices] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_SERVER_ADD}/user/${userId}`).then((data) => {
      setuser(data.data);
    })
    axios.get(`${process.env.REACT_APP_SERVER_ADD}/invoices/${userId}`).then((items) => {
      setuserInvoices(items.data);
      
    })
    // console.log(userInvoices)

    if(user && userInvoices){
      setloading(false);
    }
  })

  
  const statusText = (status, clientStatus, final) => {
    if(status===false && clientStatus === false){
      return 'Unpaid';
    }
    else if(status===false && clientStatus === true){  
      return 'View Receipt';
    }
    else if(status === true){
      return 'Paid';
    }
  }

  const colorFromStatus = (status) => {
    if(status === 'Unpaid'){
      return '#D50000';
    }
    else if(status === 'View Receipt'){
      return '#EA8C00';
    }
    else if(status === 'Paid'){
      return '#00B733';
    }
  }
  
  if(loading===true){
    return(<h2>Loading</h2>)
  }
  else if(idFormParams.userId === userId){
  return (
    <div className="app__dashboard">
      <Navbar />
      <div className="app__dashboard-wrapper">
        <Sidebar />
        <div className="app__dashboard-main">
          <h1 style={{fontWeight:500}}>Welcome, {user[0].name}</h1>
          <Link to='/generateInvoice' state={{uId: userId}}><button className='submit-btn'>CREATE INVOICE</button></Link>
          <div className="app__dashboard-invoiceList">
            <h2>Your Invoices</h2>
            {userInvoices.map((item) => (
              <div className="app__invoice-item">
                <p>Invoice to {item.to}</p>
                <a href={`/invoice/${item.id}/?review=true`}>
                <p className='status' style={{color:colorFromStatus(statusText(item.status, item.statusByClient, item.finStatus)), fontWeight: 600}}>{statusText(item.status, item.statusByClient, item.finStatus)}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
  }
  else{
    return(<h1>You are not authorised to review this section.</h1>)
  }
}

export default Dashboard