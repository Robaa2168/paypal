import React from 'react'
import './Homepage.css';
import { Footer, Navbar } from '../SoleComponents';
import { Link } from 'react-router-dom';

const Homepage = () => {
  return (
    <>
        <Navbar />
        <section className='pypl-mpesa-section'>
            <div className="pypl-wlcm-info">
                <h1>Welcome to PayPal Mobile Money Service with M-PESA.</h1>
                <p>Finally in Kenya you can now move funds between your PayPal and M-PESA accounts. Your money, your choice!</p>
                <div className="pypl-wlt-btns-container">
                    <Link to="/paypal-mpesa/withdraw" className='button'>Withdraw from PayPal</Link>
                    <Link to="/paypal-mpesa/topup" className='button'>Top Up to PayPal</Link>
                </div>
            </div>
        </section>
        <Footer />
    </>
  )
}

export default Homepage