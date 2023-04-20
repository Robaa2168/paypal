import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [openMobileNav, setOpenMobilenav] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768);
          }
      
          window.addEventListener('resize', handleResize);
          handleResize();
      
          return () => window.removeEventListener('resize', handleResize);
    }, []);

  return (
    <header className='pypl-mpesa-header'>
        {/* mobile navbar */}
        {isMobile && <div className="mobile-navbar">
            <div className="logo-container">
                <div className="pypl-logo">
                    <img src="./paypal.png" alt="paypal logo" />
                </div>
                <div className="mpesa-logo">
                    <h4>M-PESA</h4>
                </div>
            </div>
            <div className="hamburger-icon">
                <FaBars onClick={() => setOpenMobilenav(!openMobileNav)} className='icon' />
            </div>
        </div>}

        {/* mobile navigation */}
       { openMobileNav && <nav className='mobile-navigations'>
            <ul className='nav-container__mobile'>
                <Link to="/paypal-mpesa/withdraw" className='nav-item__mobile'>Withdraw</Link>
                <Link to="/paypal-mpesa/topup" className='nav-item__mobile'>Top Up</Link>
                <Link to="/paypal-mpesa" className='nav-item__mobile'>Transaction History</Link>
                <Link to="/paypal-mpesa" className='nav-item__mobile'>FAQ</Link>
                <Link to="/paypal-mpesa" className='nav-item__mobile'>Contact</Link>
                <Link to="/paypal-mpesa" className='nav-item__mobile'>Logout</Link>
            </ul>
        </nav>}

        {/* desktop navigation */}
        {!isMobile && <div className="desktop-navbar">
            <div className="logo-container">
                <div className="pypl-logo">
                    <img src="./paypal122.png" alt="paypal logo" />
                </div>
                <div className="mpesa-logo">
                    <h4>M-PESA</h4>
                </div>
            </div>

            {/* desktop navbar */}
            <nav className="desktop-navigations">
                <ul className='nav-container__desktop'>
                    <Link to="/paypal-mpesa/withdraw" className='nav-item__desktop'>Withdraw</Link>
                    <Link to="/paypal-mpesa/topup" className='nav-item__desktop'>Top Up</Link>
                    <Link to="/paypal-mpesa" className='nav-item__desktop'>Transaction History</Link>
                    <Link to="/paypal-mpesa" className='nav-item__desktop'>FAQ</Link>
                    <Link to="/paypal-mpesa" className='nav-item__desktop'>Contact</Link>
                    <Link to="/paypal-mpesa" className='nav-item__dsktop'>Logout</Link>
                </ul>
            </nav>

            <div className="login-content">
                <div className="user-welcome">
                    <h5>Welcome Kandy Hamisi</h5>
                </div>
                <div className="logout-button">
                    <button>Log Out</button>
                </div>
            </div>
        </div>}
    </header>
  )
}

export default Navbar