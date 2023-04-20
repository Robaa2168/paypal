import React from "react";
import "./PaymentPreferencesModal.css";
import { Link } from "react-router-dom";

function PaymentPreferencesModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modalPayment">
      <div className="modal-contentPayment">
        <div className="closeContainerPayment">
          <button className="closePayment" onClick={onClose}>
            &times;
          </button>
        </div>
        <img src="/paypal123.png" alt="walletLogo" className="paymentImg" />
        <div className="modalContentPaymentDiv">
          <p className="payingOnline">Preferred when paying online</p>
          <p className="settingPreferred">
            Setting a preferred way to pay online can help you check out even
            faster. Of course, you'll always be able choose a different way to
            pay at checkout.
          </p>
          <p className="toUse">We'll use it when you:</p>
          <ul className="paymentList1">
            <li className="paymentListL1">Shop online</li>
            <li className="paymentListL2">
              Send payments to pay for goods and services
            </li>
          </ul>
          <p className="friends">Sending money to friends and family</p>
          <p className="paymentOptions">
            We'll first show the options that can save you money on fees, like
            your PayPal balance or your bank.
          </p>
          <p className="usingPaypal">
            More about using PayPal balance as preferred
          </p>
          <p className="multipleCurrencies">
            If you have multiple currencies, transactions using balance may be
            subject to currency conversion fees.
          </p>
          <p className="agreement">
            For more info, please read our{" "}
            <Link className="agreementLink">User Agreement.</Link>
          </p>
          <button className="btnPayment" onClick={onClose}>
            <span className="btnTPayment">OK</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentPreferencesModal;
