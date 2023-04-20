import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { RiSettings5Fill } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    setToggle(!toggle);
  }

  return (
    <div>
      <div
        className="navbar"
        style={{
          transform: toggle ? "translateX(60%)" : "translateX(0)",
          transition: "all 0.3s",
        }}
      >
        {!toggle ? (
          <SlMenu className="sideMenu" onClick={handleToggle} />
        ) : (
          <RxCross2 className="sideMenu" onClick={handleToggle} />
        )}

        <div className="dashboardheader">
     
          <div className="navLinks">
            <Link to="#" className="navLink">
              Dashboard
            </Link>
            <Link to="#" className="navLink">
              Send and Request
            </Link>
            <Link to="/wallet" className="navLink">
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
      {toggle ? (
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
      ) : (
        <></>
      )}
    </div>
  );
};

export default Header;
