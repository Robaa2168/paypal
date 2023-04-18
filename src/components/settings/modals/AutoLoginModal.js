import React from "react";
import "./AutoLoginModal.css";

function AutoLoginModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal2">
      <div className="modal-content2">
        <div className="closeContainer2">
          <button className="close2" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="password2">
          <p className="passwordHeader2">
            Manage auto login, including OneTouch™
          </p>
          <p className="addition1">Auto login is turned off for all devices</p>
          <button type="submit" className="btn2">
            <span className="btnT2">Enable</span>
          </button>
        </div>
        <div className="logoContainer2">
          <img src="/paypal123.png" alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default AutoLoginModal;
