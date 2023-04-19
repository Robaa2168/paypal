import React, { useState } from 'react'
import './RequestPreview.css'
import { FaUser } from 'react-icons/fa'

const RequestPreview = () => {

    const [textAreaActive, setTextAreaActive] = useState(false);

    const [price, setPrice] = useState("0.00")

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    }

  return (
    <>
        {/* navbar goes here */}
        <section className='request-preview-section'>
            <div className="request-preview-card">
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

                <div className='requester-list'>
                    {/* map through the added contacts to request money from */}
                    <div className="requester-container">
                        <div className="user-details">
                            <div className="avatar-container">
                                <FaUser />
                            </div>
                            <div className="username">Karen Ndungu</div>
                        </div>
                        <div className="amount-request">
                            $0.00
                        </div>
                    </div>
                </div>

                <div className="add-person">
                    <h4>+ Add someone else?</h4>
                </div>

                <div className="reason-input">
                    {textAreaActive && <label htmlFor="">What's this payment for?</label>}
                    <textarea
                        name=""
                        placeholder={!textAreaActive && "+ What's this payment for?"}
                        id=""
                        cols="30"
                        rows="5"
                        onFocus={() => setTextAreaActive(true)}
                    ></textarea>
                </div>
            </div>

            <div className="other-details">
                <button>Request a Payment</button>
                <h6>Cancel</h6>
            </div>
        </section>
    </>
  )
}

export default RequestPreview