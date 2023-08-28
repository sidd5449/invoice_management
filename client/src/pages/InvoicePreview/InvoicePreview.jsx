import React from 'react';
import './InvoicePreview.scss';

const InvoicePreview = () => {
  return (
    <div className="app__invoice">
        <div className="app__invoice-title">
            <div className="content">
                <h2>Company Name</h2>
                <p>+123-456-7890</p>
            </div>
            
        </div>
        <div className="app__invoice-details">
                <h1>INVOICE</h1>
                <div className="details">
                    <div className="details-left">
                        <p>Billed To: </p>
                        <h2>CompanyName</h2>
                        <p>+123-456-7890</p>
                    </div>
                    <div className="details-right">
                        <p style={{fontWeight:600}}>Invoice No.:</p>
                        <p>0000001</p>
                    </div>
                </div>
        </div>
        <div className="app__invoice-items">
            <div className="headings">
                <h2 className='row'>Sr No.</h2>
                <h2 className='row-long'>Item</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
            </div>
            <div className="table-contents">
            <h2 className='row'>Sr No.</h2>
                <h2 className='row-long'>Item</h2>
                <h2>Price</h2>
                <h2>Quantity</h2>
                <h2>Total</h2>
            </div>
        </div>
        <div className="app__invoice-payments">
            <div className="details-left">
            </div>
            <div className="details-right">
                <h1>176 USD</h1>
            </div>
        </div>
    </div>
  )
}

export default InvoicePreview