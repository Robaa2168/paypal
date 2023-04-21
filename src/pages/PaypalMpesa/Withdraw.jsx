import React from 'react';
import './Widthdraw.css';
import { Footer, Navbar } from '../SoleComponents'

const Withdraw = () => {
  return (
    <>
        <Navbar />
        <section className='pypl-withdraw-section'>
            <div className="main-withdraw-content">
                <div className="intro-header">
                    <h1>Withdraw from your PayPal account</h1>
                </div>

                <div className="withdraw-wrapper-splitter">
                    <div className="withdraw-container">
                        <h5>Available balance in your PayPal account:</h5>
                        <div className="balance">
                            <h2>0.00 USD</h2>
                        </div>
                        <p>
                            Please enter the amount you would like to withdraw from your PayPal account:
                        </p>
                        <div className="input-container">
                            <input type="number" placeholder="Amount" name="" id="" />
                            <select name="" id="">
                                <option value="USD" selected>USD</option>
                                <option value="">YEN</option>
                                <option value="">EUR</option>
                                <option value="">GBP</option>
                            </select>
                        </div>
                        <div className="button-container">
                            <button>Continue to Withdraw</button>
                        </div>
                    </div>
                    <div className="svg-transfer-illustration">
                        <img src="https://res.cloudinary.com/dztycn4or/image/upload/v1681908458/graphic-blue_gky7dc.png" alt="transfer-illustration" />
                    </div>
                </div>
            </div>
            <div className="important-info">
                <p>Please note that the maximum amount per transaction is 150,000 KES and you can only hold up to 300,000 KES in your M-PESA account.
                Make sure your M-PESA account can hold your withdrawal balance.</p>
            </div>
            <Footer />
        </section>
    </>
  )
}

export default Withdraw