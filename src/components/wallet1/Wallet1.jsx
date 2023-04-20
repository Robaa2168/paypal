import React, { useState } from "react";
import "./Wallet1.css";
import { Link } from "react-router-dom";
import { AiFillCreditCard } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import PaymentPreferencesModal from "./modals/PaymentPreferencesModal";
import SetPreferredModal from "./modals/SetPreferredModal";
import AddCurrencyModal from "./modals/AddCurrencyModal";

function Wallet1() {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible1, setModalVisible1] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  function toggleModal() {
    setModalVisible(!modalVisible);
  }

  function toggleModal1() {
    setModalVisible1(!modalVisible1);
  }

  function toggleModal2() {
    setModalVisible2(!modalVisible2);
  }

  function toggleModal3() {
    setModalVisible3(!modalVisible3);
  }

  function togglePopup() {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="walletMain">
      <div className="walletContainer">
        <div className="walletContainerDiv1">
          <p className="linkCard">
            <p className="linkCardIconP">
              <AiFillCreditCard className="linkCardIcon" />
            </p>
            <p className="linkCardP">Link a card</p>
          </p>

          <div className="paypalBal">
            <img
              src="/paypal123.png"
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
          <img
            src="/paypal123.png"
            alt="walletLogo"
            className="walletContainerDiv2Img"
          />
          <p className="walletContainerDiv2BalP">PayPal balance</p>
          <p className="walletContainerDiv2Bal">$0.00</p>
          <p className="walletContainerDiv2P2">Available</p>
          <button className="walletContainerDiv2Btn">Send payments</button>

          <div className="walletContainingCurrency">
            <div className="walletContainingCurrencyDiv">
              <img
                src="/european.png"
                alt="EURO"
                className="walletContainingCurrencyImg"
              />
              <div className="walletContainingCurrencyDiv1">
                <p className="walletContainingCurrencyP">EURO</p>
                <p className="walletContainingCurrencyP1">PRIMARY</p>
              </div>
            </div>
            <p className="walletContainingCurrencyBal">$0.00</p>
          </div>

          <div className="walletContainingCurrency">
            <div className="walletContainingCurrencyDiv">
              <img
                src="/european.png"
                alt="EURO"
                className="walletContainingCurrencyImg"
              />
              <p className="walletContainingCurrencyP2">EURO</p>
            </div>
            <div className="div9">
              <div className="div10">
                <p className="walletContainingCurrencyBal">$0.00</p>
                <p className="walletContainingCurrencyBal">$0.00 in EURO</p>
              </div>
              <CiMenuKebab className="div9Icon" onClick={togglePopup} />
              {popupVisible && (
                <div className="popupMenu">
                  <Link className="popupLink">Link 1</Link>
                  <Link className="popupLink">Link 2</Link>
                </div>
              )}
            </div>
          </div>

          <div className="addCurrency">
            <Link className="addCurrencyLink1" onClick={toggleModal2}>
              Add a currency
            </Link>
            <Link className="addCurrencyLink2">Currency Calculator</Link>
          </div>

          <div className="preferred">
            <p className="preferredOnline">Preferred when paying online</p>
            <Link className="setPreferred" onClick={toggleModal1}>
              Set as preferred
            </Link>
            <p className="preferredP1">
              We'll use your available balance when you shop online or send
              money for goods and services.
            </p>
            <p className="preferredP2">
              If you don't have enough money in your balance, we'll ask you to
              pick another funding source at checkout.
            </p>
            <Link className="preferredAbout" onClick={toggleModal}>
              More about payment preferences
            </Link>
          </div>
        </div>
        <PaymentPreferencesModal
          isVisible={modalVisible}
          onClose={toggleModal}
        />
        <SetPreferredModal isVisible={modalVisible1} onClose={toggleModal1} />
        <AddCurrencyModal isVisible={modalVisible2} onClose={toggleModal2} />
      </div>
    </div>
  );
}

export default Wallet1;
