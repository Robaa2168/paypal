import React, { useState } from 'react';
import SendRequestHeader from './sendRequestHeader/SendRequestHeader';
import { FaFile, FaSearch, FaTimesCircle, FaUser } from 'react-icons/fa'

import './SendMoney.css';
import { contacts } from '../constants';

const SendMoney = () => {
  const [requester, setRequester] = useState('');
  const [amount, setAmount] = useState(0);

  const [search, setSearch] = useState("");
  const [recepient, setReceipient] = useState({})

  const handleRequestMoney = () => {
    // logic to request money
  }

  const handleClear = () => {
    setSearch("");
    setReceipient({});
  }

 

  return (
    
    <>
      <SendRequestHeader />
      <section className='send-money-container'>
        <div className="input-search-container">
          <div className="intro-header">
            <h1>Send Payment to</h1>
          </div>
          <div className="search-container">
            <input
              placeholder='Name, @username, email, or mobile'
              onChange={(e) => setSearch(e.target.value)}
              className='pypl-search'
              type="text"
              name=""
              id=""
            />
            <FaSearch className='search-icon' />
            <div className="close-icon-container">
              <FaTimesCircle onClick={handleClear} className='close-icon' />
            </div>
            {Object.keys(recepient).length > 0 && <div className="contact-badge">
              <div className="avatar">
                <FaUser />
              </div>
              <span>{recepient.username.length > 0 ? recepient.username : recepient.phone}</span>
            </div>}
            {search && <div className="searched-contacts">
              {
                contacts.filter((contact) => {
                  return search.toLocaleLowerCase() === ''
                    ? contact
                    : contact.username.toLocaleLowerCase().includes(search)
                }).map((contact) => (
                  <li key={contact.id} onClick={() =>{
                    setReceipient(contact);
                    setSearch("");
                  } } className="contact">{contact.username.length > 0 ? contact.username : contact.phone}</li>
                ))
              }
            </div>}
          </div>
          <div className="next-btn-container">
            <button className='next-btn'>Next</button>
          </div>
        </div>

        <div className="send-ways">
          <div className="intro-header">
            <h1>More ways to send</h1>
          </div>
          <div className="invoice-container">
            <div className="icon-container">
              <FaFile />
            </div>
            <div className="info">
              <h5>Send an invoice</h5>
              <p>Customize, track, and send invoices.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SendMoney;