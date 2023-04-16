import React, { useState } from 'react';
import { FaCcApplePay, FaEllipsisV, FaFileInvoice, FaStore, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { paymentActivity } from '../constants';
import './Dashboard.css';

const Dashboard = () => {
  
  const [showMore, setShowMore] = useState(false);

  return (
    <main className='dashboard'>
      <section className='cards-container'>
        <Link to="/" className="pypl-card card-balance-card">
          <div className="pypl-card-header">
            <h3>PayPal balance</h3>
            <div className="pypl-icon-container">
              <FaEllipsisV className='pypl-balance-icon' />
            </div>
          </div>
          <div className="pypl-card-body">
            <h1 className='pypl-balance'>$0.00</h1>
            <span className='pypl-card-text'>Available</span>
          </div>
          <div className="pypl-card-footer">
            <button className='pypl-primary-btn'>Transfer funds</button>
          </div>
        </Link>

        <div className="pypl-card activity-card">
          <div className="pypl-card-header">
            <h5 className='activity-heading'>Recent Activity</h5>
            <div className="pypl-card-body">
              {paymentActivity.length === 0 && <p>See when money comes in, and when it goes out. You’ll find your recent PayPal activity here.</p>}
              <div className='acitvity-cards'>
                {
                  paymentActivity.map((activity, index) => (
                    <div key={activity.id} className="activity">
                      <div className='activity-icon'>
                        <FaStore className='icon' />
                      </div>
                      <div className='activity-info'>
                        <div className="header">
                          <span className="activity-name">{activity.name}</span>
                          <span className='payment'>-${activity.amount}</span>
                        </div>
                        <div className="date">
                          <span>{activity.date} . {activity.type}</span>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
            <div className="pypl-card-footer">
              <Link to="/activity" className='show-all'>Show all</Link>
            </div>
          </div>
        </div>
      </section>

      {/* todo: make the desktop sidebar as a single component */}
      {/* sidebar */}
      <section className='desktop-sidebar'>
        <div className="links-container">
          <div className="buttons-container">
            <Link to="/send-money" className="pypl-secondary-btn">Send</Link>
            <Link t0="/request-money" className="pypl-secondary-btn">Request</Link>
          </div>
          <ul className='kebab-menu-container'>
            <li>
              <button>
                <span className='icon-container'>
                  {showMore
                    ? <FaTimes className='pypl-icon' onClick={() => setShowMore(false)} />
                    : <FaEllipsisV className='pypl-icon' onClick={() => setShowMore(true)} />
                  }
                </span>
                <span className='more-info'>{showMore ? "Close" : "More"}</span>
              </button>
            </li>
          </ul>
          {/* hidden dropdown */}
          {showMore && <div className="hidden-dropdown">
            <ul>
              <li className='hidden-dropdown-item'>
                <div className="icon-container"><span><FaFileInvoice /></span></div>
                <span className='dropdown-link'>Create an invoice</span>
              </li>
              <li className='hidden-dropdown-item'>
                <div className="icon-container"><span><FaFileInvoice /></span></div>
                <span className='dropdown-link'>Create an estimate</span>
              </li>
              <li className='hidden-dropdown-item'>
                <div className="icon-container"><span><FaFileInvoice /></span></div>
                <span className='dropdown-link'>Go to Resolution Center</span>
              </li>
            </ul>
          </div>}
        </div>

        <div className="banks-and-cards">
          <div className="pypl-header">
            <h4>Banks and cards</h4>
            <span>
              <FaEllipsisV />
            </span>
          </div>
          <div className="pypl-body">
            <span>
              <FaCcApplePay />
            </span>
            <p>Shop and send payments more securely. Link your credit card now</p>
          </div>
          <Link to="/" className='pypl-footer'>
            Link a Card or Bank
          </Link>
        </div>

      </section>
    </main>
  );
}

export default Dashboard;
