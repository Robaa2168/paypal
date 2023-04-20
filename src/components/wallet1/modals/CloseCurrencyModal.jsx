import React from "react";
import "./CloseCurrencyModal.css";
import { BiArrowBack } from "react-icons/bi";

function CloseCurrencyModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modalMakePrimary">
      <div className="modal-contentMakePrimary">
        <div className="closeContainerMakePrimary">
          <button className="closeMakePrimary" onClick={onClose}>
            <BiArrowBack />
          </button>
          <img
            src="/paypal123.png"
            alt="walletLogo"
            className="makePrimaryImg"
          />
          <button className="closeMakePrimary" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modalContentMakePrimaryDiv">
          <div className="euro">
            <img src="/european.png" alt="EURO" className="euroImg" />
            <p className="euroP">EURO</p>
          </div>
          <p className="makePrimaryPa">Close this currency</p>
          <p className="makePrimaryPa2">
            Closing this currency means it won't show up in your balance unless
            you accept another payment in this currency.
          </p>
          <button className="btnMakePrimary">
            <span className="btnTMakePrimary">Close Currency</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CloseCurrencyModal;
