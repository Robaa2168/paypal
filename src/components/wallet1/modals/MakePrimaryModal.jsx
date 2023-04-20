import React from "react";
import "./MakePrimaryModal.css";
import { BiArrowBack } from "react-icons/bi";

function MakePrimaryModal({ isVisible, onClose }) {
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
          <p className="makePrimaryPa">Make this your primary currency</p>
          <p className="makePrimaryPa2">
            You should be able to see your total balance in this currency in
            case of multiple currenies in wallet
          </p>
          <button className="btnMakePrimary">
            <span className="btnTMakePrimary">Set as Primary</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default MakePrimaryModal;
