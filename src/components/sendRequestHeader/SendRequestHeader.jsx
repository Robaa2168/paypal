import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './SendRequestheader.css'

const SendRequestHeader = () => {
  return (
    <div className='sendReq-header'>
        <ul>
            <Link to="/send-money" className='pypl-link active'>Send</Link>
            <Link to="/request-money" className='pypl-link'>Request</Link>
            <Link className='pypl-link'>Contacts</Link>
            <Link className='pypl-link'>More</Link>
            {/* <div className="icon-container-left">
              <FaArrowLeft />
            </div>
            <div className="icon-container-right">
              <FaArrowRight />
            </div> */}
        </ul>
    </div>
  )
}

export default SendRequestHeader