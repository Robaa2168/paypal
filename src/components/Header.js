import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";

const Header = () => {
  return (
    <div>
      <div className="navbar">
        <SlMenu className="sideMenu" />

        <div className="dashboard">
          <Link>
            <img src="/paypal123.png" alt="paypalLogo" id="logo1" />
          </Link>
          <div className="navLinks">
            <Link to="#" className="navLink">
              Dashboard
            </Link>
            <Link to="#" className="navLink">
              Send and Request
            </Link>
            <Link to="#" className="navLink">
              Wallet
            </Link>
            <Link to="#" className="navLink">
              Activity
            </Link>
            <Link to="#" className="navLink">
              Help
            </Link>
          </div>
        </div>
        <div className="logOut">
          <IoNotifications className="settings" />
          <Link to="" className="settings1">
            <RiSettings5Fill className="settings" />
          </Link>
          <Link className="logout">LOG OUT</Link>
        </div>
      </div>
      <div className="popUp">
        <div className="popUp1">
          <Link className="popUp2">LOG OUT</Link>
          <Link to="" className="popUp2">
            <RiSettings5Fill className="" />
          </Link>
        </div>

        <p className="popUpP">Stanley Mayore</p>

        <div className="popLinks">
          <Link to="#" className="popLink">
            Dashboard
          </Link>
          <Link to="#" className="popLink">
            Send and Request
          </Link>
          <Link to="#" className="popLink">
            Wallet
          </Link>
          <Link to="#" className="popLink">
            Activity
          </Link>
          <Link to="#" className="popLink">
            Help
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
