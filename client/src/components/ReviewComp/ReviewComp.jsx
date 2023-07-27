import React from 'react';
import axios from 'axios';
import './ReviewComp.scss';
import { toast } from 'react-toastify';

const ReviewComp = (props) => {

  const handleVerify = () => {
    axios.patch(`http://localhost:8080/updateStatus/${props.id}`).then(() => {
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
      <a href={`http://localhost:8080/${props.file}`} target='blank'><button>DOWNLOAD RECEIPT ATTACHED BY CLIENT</button></a>
      <div className="app__reviewComp-agreement">
        <input type="checkbox" required/>
        <p>I've verified the receipt and agree that the client has paid the invoice.</p>
      </div>
      <button className='submit-btn' onClick={handleVerify}>MARK AS PAID</button>
    </div>
  )
}

export default ReviewComp