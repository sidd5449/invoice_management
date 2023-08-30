import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Landing.scss';
import Card from '../../assets/card.png';
import Temps from '../../assets/temps.png';

const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="app__landing">
        <div className="app__landing-main">
          <div className="app__landing-titles">
            <h1>Effortless Invoicing, Instant Payments - Integrated Solutions for Quick Transactions</h1>
            <div className="app__titles-info">
              <p>Generate beautiful invoices with specialised QR codes to receive payment. Get seamless payment status tracking and invoice management all in one tool!</p>
              <div className="titles-info-btns">
                <a href="/auth/?registered:false"><button>SIGNUP</button></a>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
          <div className="app__landing-card">
            <h1>Track and Manage Your Invoice's Status</h1>
            <img src={Card} alt="card" />
          </div>
          <div className="app__landing-template">
            <div className="template-content">
              <h1>Professional and Clean Template</h1>
              <p>Build your Invoices with our clean and professional template, carefully designed to suit the needs of your business.
                Our professional invoice template exudes a sense of professionalism and sophistication. It features a clean and sleek design with a focus on clarity and readability. The template incorporates well-organized sections for the invoice number, date, client details, itemized list of products or services, pricing, and total amount due. It also includes space for your company logo, contact information, and payment terms. The template ensures that your invoices convey a professional image while remaining easy to understand for your clients.
              </p>
              <button>PREVIEW TEMPLATE</button>

            </div>
            <img src={Temps} alt="preview" />
          </div>
          <div className="app__landing-subs">
            <h1>Subscriptions</h1>
            
          </div>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default Landing