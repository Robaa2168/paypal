import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaBell, FaCog, FaTimes } from 'react-icons/fa'
import './Header.css'

const Header = () => {

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className='header-section'>
      <div className='hamburger-menu'>
        <FaBars onClick={() => setShowMobileMenu(true)} />
      </div>
      <div className='logo'>
        <img src="./paypal2.png" alt="paypal logo" />
      </div>
      {/* mobile-notification-icon */}
      <span className='nav-item__mobile'>
            <Link className='link__mobile notifications notifications__mobile' to="/">
              <FaBell />
              <span className='notification-badge'>2</span>
            </Link>
      </span>
      {/* desktop menu */}
      <nav className='navbar-nav desktop-navigation' role="navigation">
        <ul className="navbar-primary">
          <li className="nav-item">
            <Link to="/" className='link active'>Dashboard</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className='link' id='send-money'>Send and Request</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className='link'>Wallet</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className='link'>Activity</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className='link'>Help</Link>
          </li>
        </ul>
        <ul className="navbar-secondary">
          <li className='nav-item'>
            <Link className='link notifications' to="/">
              <FaBell />
              <span className='notification-badge'>2</span>
            </Link>
          </li>
          <li className='nav-item'>
            <Link to="/" className='link'>
              <FaCog />
            </Link>
          </li>
          <div className="nav-item">
            <Link to="/" className='link'>
              LOG OUT
            </Link>
          </div>
        </ul>
      </nav>

      {/* mobile menu */}
      {showMobileMenu && <aside className='mobile-navigation'>
        <div className="settings">
          <span>LOG OUT</span>
          <span><FaCog /></span>
        </div>
        <div className="user-info">
          <span className="avatar">H</span>
          <span className="username">Hamisi Kandy</span>
        </div>
        {/* menu */}
        <nav className='mobile-menu'>
        <ul className="navigation-mobile">
          <li className="nav-item__mobile">
            <Link to="/" className='link__mobile active'>Dashboard</Link>
          </li>
          <li className="nav-item__mobile">
            <Link to="/" className='link__mobile' id='send-money'>Send and Request</Link>
          </li>
          <li className="nav-item__mobile">
            <Link to="/" className='link__mobile'>Wallet</Link>
          </li>
          <li className="nav-item__mobile">
            <Link to="/" className='link__mobile'>Activity</Link>
          </li>
          <li className="nav-item__mobile">
            <Link to="/" className='link__mobile'>Help</Link>
          </li>
        </ul>
        </nav>
        {showMobileMenu && <div className='close-btn'>
          <FaTimes onClick={() => setShowMobileMenu(false)} />
        </div>}
      </aside>}

    </header>
  )
}

export default Header