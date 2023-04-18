import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import './SendPreview.css'

const SendPreview = () => {

    const [price, setPrice] = useState("0.00")

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

  return (
    <>
    {/* navbar goes here */}
    <section className='send-preview-section'>
        <div className="send-preview-card">
            <div className="contact-details">
                <div className="preview-avatar">
                    <FaUser classname="icon" />
                </div>
                <div className="username-phone">
                    <h1>jack</h1>
                    <p>+254778342725</p>
                </div>
            </div>

            <div className="payment-input">
                <div className="currency-symbol">$</div>
                <input type="tel" onChange={handlePriceChange} step="0.01" name="" id="" value={price} placeholder='0.00' />
            </div>
            <div className="currency-type">
                <select>
                    <option selected>USD</option>
                    <option value="">YEN</option>
                    <option value="">EUR</option>
                </select>
            </div>

            <div className="reason-input">
                <textarea name="" placeholder="+ What's this payment for?" id="" cols="30" rows="10"></textarea>
            </div>
        </div>

        <div className="other-details">
            <p>Eligible purchases are covered by <a href="#">Paypla Buyer Protection</a></p>
            <p>For more information please read our <a href="#">user agreement</a></p>
            <button>Continue</button>
            <h6>Cancel</h6>
        </div>
    </section>
    </>
  )
}

export default SendPreview