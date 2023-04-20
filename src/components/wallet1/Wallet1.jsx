import React from "react";
import "./Wallet1.css";
import { Link } from "react-router-dom";
import { AiFillCreditCard } from "react-icons/ai";

function Wallet1() {
  return (
    <div className="walletMain">
      <div className="walletContainer">
        <div className="walletContainerDiv1">
          <Link className="linkCard">
            <p className="linkCardIconP">
              <AiFillCreditCard className="linkCardIcon" />
            </p>
            <p className="linkCardP">Link a card</p>
          </Link>

          <div className="paypalBal">
            <img
              scr="/paypal123.png"
              alt="walletLogo"
              className="paypalBalImg"
            />
            <div className="paypalBalCard">
              <p className="paypalBalCardP">PayPal balance</p>
              <p className="paypalBalCardAvailable">$0.00 Available</p>
            </div>
          </div>
        </div>

        <div className="walletContainerDiv2">
          <img scr="/paypal123.png" alt="walletLogo" className="walletContainerDiv2Img" />
          <p className="walletContainerDiv2BalP">PayPal balance</p>
          <p className="walletContainerDiv2Bal">$0.00</p>
          <p className="walletContainerDiv2P2">Available</p>
          <button className="walletContainerDiv2Btn">Send payments</button>
          <div className="addCurrency">
            <Link className="addCurrencyLink1">Add a currency</Link>
            <Link className="addCurrencyLink2">Currency Calculator</Link>
          </div>

          <div className="preferred">
            <p className="preferredOnline">Preferred when paying online</p>
            <Link className="setPreferred">Set as preferred</Link>
            <p className="preferredP1">
              We'll use your available balance when you shop online or send
              money for goods and services.
            </p>
            <p className="preferredP2">
              If you don't have enough money in your balance, we'll ask you to
              pick another funding source at checkout.
            </p>
            <Link className="preferredAbout">
              More about payment preferences
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wallet1;
