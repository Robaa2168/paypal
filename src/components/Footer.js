import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="main">
      <div className="container1">
        <img src="/paypal122.png" alt="paypalLogo" />
        <div className="help">
          <Link to="" className="contact">
            Help
          </Link>
          <Link to="" className="contact">
            Contact Us
          </Link>
          <Link to="" className="contact">
            Security
          </Link>
        </div>
      </div>
      <div className="container2">
        <div className="paypal">
          <p>©1999-2023 PayPal, Inc. All rights reserved.</p>
          <div className="privacy">
            <Link className="contact">Privacy</Link>
            <Link className="contact">Legal</Link>
          </div>
        </div>
        <p>
          PayPal Pte. Ltd. ("3PL") has applied for a license under the Singapore
          Payment Services Act ("PS Act") with the Monetary Authority of
          Singapore. During this statutory transitional period, 3PL is operating
          under an exemption from holding a license and is allowed to continue
          to provide specific payment services.
        </p>
      </div>
    </div>
  );
}

export default Footer;
