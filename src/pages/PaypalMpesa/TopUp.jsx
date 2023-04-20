import React from 'react'
import './TopUp.css'
import { Footer, Navbar } from '../SoleComponents'
import { Link } from 'react-router-dom'

const TopUp = () => {
  return (
    <>
        <Navbar />
        <section className='topup-section'>
            <div className="main-topup-section">
                <div className="topup-header">
                    <h1>Top Up your PayPal account</h1>
                </div>
                <div className="add-money-container">
                    <div className="topup-directions-howto">
                        <ul className='how-to-container'>
                            <div className='item'>
                                <span className='bullet-number'>1</span>
                                <li className='first'>
                                    Calculate the KES amount you need to convert to get the USD amount you want in your PayPal account.
                                </li>
                            </div>
                            <div className='item'>
                                <span className='bullet-number'>2</span>
                                <li className='second'>
                                    Open your M-PESA, select "Lipa na M-PESA", then "Pay Bill".
                                </li>
                            </div>
                            <div className='item'>
                                <span className='bullet-number'>3</span>
                                <li className='third'>
                                    Enter
                                    <span className='text-highlighted'> 800088 </span>
                                    as the business number, and your phone number as the account number.
                                </li>
                            </div>
                        </ul>
                        <h3>And that's it!</h3>
                        <p>You will receive an SMS confirming that USD were added to your PayPal balance. You can also check the status on the <Link to="/" className='text-highlighted'>Trasaction History</Link> page.</p>
                    </div>
                    <div className="topup-pic">
                        <img src="https://res.cloudinary.com/dztycn4or/image/upload/v1681885983/smartphone_oojydl.png" alt="topup-pic" />
                    </div>
                </div>
                <div className="topup-calculator">
                    <div className="topup-input">
                        <form action="" method='POST'>
                            <div>
                                <span>The amount you want in your&nbsp;<span className='text-highlighted'>PayPal</span>&nbsp;account:</span>
                                <div className='topup-input-container'>
                                    <div className="input-select">
                                        <input type="number" name="" id="" />
                                        <select name="" id="">
                                            <option value="" selected>USD</option>
                                            <option value="">YEN</option>
                                            <option value="">GBP</option>
                                        </select>
                                    </div>
                                    <div className="button-container"><button className='calculate-btn'>Calculate</button></div>
                                </div>
                                <div className="fineprint">
                                    FX Rate: 
                                    <strong>
                                        1 USD = 138.95 KES
                                    </strong>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="arrow">
                        <img src="https://res.cloudinary.com/dztycn4or/image/upload/v1681928507/arrow-right_r6u4tj.png" alt="arrow-right" />
                    </div>
                    <div className="topupfunds-output">
                        <p>The amount you need to transfer from your <span className="text-highlighted">M-PESA</span></p>
                        <h3>0 KES</h3>
                        <span>An additional M-PESA <span className="text-highlighted">customer to business paybill charge </span>will apply</span>
                    </div>
                </div>
            </div>
            <Footer />
        </section>
    </>
  )
}

export default TopUp