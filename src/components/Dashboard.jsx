import React from 'react';
import { FaCcApplePay, FaEllipsisV, FaStore } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { paymentActivity } from '../constants';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <main className='dashboard'>
      <section className='cards-container'>
        <div className="card card-balance-card">
          <div className="card-header">
            <h3>PayPal balance</h3>
            <FaEllipsisV />
          </div>
          <div className="card-body">
            <h1 className='balance'>$0.00</h1>
            <p className='card-text'>Available</p>
          </div>
          <div className="card-footer">
            <button className='primary-btn'>Transfer funds</button>
          </div>
        </div>

        <div className="card activity-card">
          <div className="card-header">
            <h3 className='heading'>Recent Activity</h3>
            <div className="card-body">
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
            <div className="card-footer">
              <h3 className='show-all'>Show all</h3>
            </div>
          </div>
        </div>
      </section>

      {/* todo: make the desktop sidebar as a single component */}
      {/* sidebar */}
      <aside className='desktop-sidebar'>
        <div className="links-container">
          <div className="buttons-container">
            <Link to="/send-money" className="secondary-btn">Send</Link>
            <Link t0="/request-money" className="secondary-btn">Request</Link>
          </div>
          <ul className='kebab-menu-container'>
            <li>
              <button>
                <span className='icon-container'>
                  <FaEllipsisV className='icon' />
                </span>
                <span className='more-info'>More</span>
              </button>
            </li>
          </ul>
        </div>

        <div className="banks-and-cards">
          <div className="header">
            <h3>Banks and cards</h3>
            <span>
              <FaEllipsisV />
            </span>
          </div>
          <div className="body">
            <span>
              <FaCcApplePay />
            </span>
            <p>Shop and send payments more securely. Link your credit card now</p>
          </div>
          <div className='footer'>
            <h3>Link a Card or Bank</h3>
          </div>
        </div>

      </aside>
    </main>
  );
}

export default Dashboard;
