import React from 'react';
import axios from 'axios';
import './ReviewComp.scss';
import { toast } from 'react-toastify';

const ReviewComp = (props) => {

  const id = [
    {id: props.id}
  ]
  const handleVerify = () => {
    axios.patch(`${process.env.REACT_APP_SERVER_ADD}/updateStatus/${props.id}`).then(() => {
      axios.post(`${process.env.REACT_APP_SERVER_ADD}/sendInvoice`, id)
      toast.success("Marked as Paid!!", {
        position: toast.POSITION.TOP_RIGHT
      })
    }).catch((error) => {
      toast.error("Please check the box and ensure network connectivity", {
        position: toast.POSITION.TOP_RIGHT
      })
    })
  }

  return (
    <div className="app__reviewComp">
      <a href={`${process.env.REACT_APP_SERVER_ADD}/${props.file}`} target='blank'><button>DOWNLOAD RECEIPT ATTACHED BY CLIENT</button></a>
      <div className="app__reviewComp-agreement">
        <input type="checkbox" required/>
        <p>I've verified the receipt and agree that the client has paid the invoice.</p>
      </div>
      <button className='submit-btn' onClick={handleVerify}>MARK AS PAID</button>
    </div>
  )
}

export default ReviewComp