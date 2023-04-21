import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./AddCurrencyModal.css";
import { BiArrowBack } from "react-icons/bi";
import { IoWarningSharp } from "react-icons/io5";
// import { Link } from "react-router-dom";

const initialValues = {
  addCurrencyValue: "",
};

const validationSchema = Yup.object({
  addCurrencyValue: Yup.string().required("Choose a currency and try again"),
});

function AddCurrencyModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modalAddCurrency">
      <div className="modal-contentAddCurrency">
        <div className="closeContainerAddCurrency">
          <button className="closeAddCurrency" onClick={onClose}>
            <BiArrowBack />
          </button>
          <img
            src="/paypal123.png"
            alt="walletLogo"
            className="addCurrencyImg"
          />
          <button className="closeAddCurrency" onClick={onClose}>
            &times;
          </button>
        </div>

        <div className="modalContentAddCurrencyDiv">
          <p className="AddCurrencyPa">Add a currency</p>
          <p className="AddCurrencyPa2">
            When you add a currency, any payments you receive in that currency
            will be credited to that balance. We'll use your primary currency
            when you send or request payments.
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="radio-addCurrency">
                  <label className="inputRadio">
                    <Field type="radio" name="addCurrencyValue" value="CAD" />
                    <img
                      src="/canada.png"
                      alt="canada"
                      className="allFlags"
                    />{" "}
                    Canadian Dollar
                  </label>
                  <label className="inputRadio">
                    <Field type="radio" name="addCurrencyValue" value="EUR" />
                    <img
                      src="/european.png"
                      alt="europe"
                      className="allFlags"
                    />
                    Euro
                  </label>
                  <label className="inputRadio">
                    <Field type="radio" name="addCurrencyValue" value="GBP" />
                    <img
                      src="/united-kingdom.png"
                      alt="britain"
                      className="allFlags"
                    />
                    British Pound
                  </label>
                  <label className="inputRadio">
                    <Field type="radio" name="addCurrencyValue" value="JPY" />
                    <img src="/japan.png" alt="japan" className="allFlags" />
                    Japanese Yen
                  </label>
                  <label className="inputRadio">
                    <Field type="radio" name="addCurrencyValue" value="SWF" />
                    <img
                      src="/switzerland.png"
                      alt="swiss"
                      className="allFlags"
                    />
                    Swiss Franc
                  </label>
                </div>
                {errors.addCurrencyValue && touched.addCurrencyValue ? (
                  <div className="errorAddCurrency">
                    <IoWarningSharp className="errIcon" />
                    {errors.addCurrencyValue}
                  </div>
                ) : null}
                <button className="btnAddCurrency">
                  <span className="btnTAddCurrency">Add a currency</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default AddCurrencyModal;
