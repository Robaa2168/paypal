import React from 'react'
import './Footer.css'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const location = useLocation();
    const myPathname = location?.pathname?.split('/')[2];
    const mainPath = location?.pathname?.split("/").length;
    console.log(mainPath)
    
  return (
    <footer className={(myPathname === "withdraw" || myPathname === "topup") ? 'withdraw-topup-footer' : 'pypl-mpesa-footer'}>
        {(mainPath === 2) && <div className='footer-img'>
            <img src="https://res.cloudinary.com/dztycn4or/image/upload/v1681885983/smartphone_oojydl.png" alt="phone dislay" />
        </div>}
        <div className='footer-navigations'>
            <ul className="navs">
                <li>About PayPal</li>
                <li>About M-PESA</li>
                <li>Terms & Conditions</li>
                <li>See How It Works</li>
            </ul>
            <div className='powered'>
                <span>Powered by</span>
                <h2>Thunes.</h2>
            </div>
        </div>
        <div className="note">
            <p>Note for uses. The information you provide in this site belongs to Thunes and will be subject to <a href="#">Thune's Privacy Policy</a></p>
        </div>
    </footer>
  )
}

export default Footer