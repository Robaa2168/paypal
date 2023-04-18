import React, { useState } from 'react';
import SendRequestHeader from './sendRequestHeader/SendRequestHeader';
import { FaFile, FaSearch, FaTimesCircle, FaUser, FaUsers } from 'react-icons/fa'

import './RequestMoney.css';
import { contacts } from '../constants';

const RequestMoney = () => {
  const [requester, setRequester] = useState('');
  const [amount, setAmount] = useState(0);

  const [search, setSearch] = useState("");
  const [recepient, setReceipient] = useState({});
  const [requesters, setrequesters] = useState([]);

  const handleRequestMoney = () => {
    // logic to request money
  }

  const handleClear = () => {
    setSearch("");
    setReceipient({});
    setrequesters([]);
  }

 

  return (
    
    <>
      <SendRequestHeader />
      <section className='send-money-container'>
        <div className="input-search-container">
          <div className="intro-header">
            <h1>Request Payment from</h1>
            <p>You can request multiple payments from up to 20 people.</p>
          </div>
            <div className="new-search-container">
              
              {Object.keys(recepient).length > 0 && <div className="auto-complete-contacts">
                {
                  requesters.map((user) => {
                    const namesArray = user.username.split(" ");
                    const firstName = namesArray[0];
                    const otherName = namesArray[namesArray.length - 1];
                    const abbreviatedFirstName = firstName.charAt(0);
                    return <div className="pypl-contact-badge">
                    <div className="avatar">
                      <FaUser />
                    </div>
                    <span>{abbreviatedFirstName + ". " + otherName}</span>
                  </div>
                  })
                }
              </div>}
              <div className="pypl-input">
                <input
                  placeholder='Name, @username, email, or mobile'
                  onChange={(e) => setSearch(e.target.value)}
                  className=''
                  type="text"
                  name=""
                  value={search}
                  id=""
                />
              </div>
              {search && <div className="searched-contacts">
                <h5>Your Contacts</h5>
              {
                contacts.filter((contact) => {
                  return search.toLocaleLowerCase() === ''
                    ? contact
                    : contact.username.toLocaleLowerCase().includes(search)
                }).map((contact) => (
                  <li key={contact.id} onClick={() =>{
                    setReceipient(contact);
                    setrequesters([...requesters, contact]);
                    setSearch("");
                  } } className="contact">{contact.username.length > 0 ? contact.username : contact.phone}</li>
                ))
              }
            </div>}
              <FaSearch className='pypl-search-icon' />
              <div className="pypl-close-icon-container">
                <FaTimesCircle onClick={handleClear} className='close-icon' />
              </div>
            </div>
            <div className="contact-count">
              <div className="contacts-icon-container">
                <FaUsers />
              </div>
              <div className="count">
                {requesters.length}/20
              </div>
            </div>
          <div className="next-btn-container">
            <button className='next-btn'>Next</button>
          </div>
        </div>

        <div className="send-ways">
          <div className="intro-header">
            <h1>More ways to request</h1>
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

export default RequestMoney;