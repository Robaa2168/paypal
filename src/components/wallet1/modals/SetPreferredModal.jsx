import React from "react";
import "./SetPreferredModal.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
// import { Link } from "react-router-dom";

const initialValues = {
  paypalPreferred: "",
};

const validationSchema = Yup.object({
  paypalPreferred: Yup.string().required("Please choose a method"),
});

function SetPreferredModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modalChoose">
      <div className="modal-contentChoose">
        <div className="closeContainerChoose">
          <button className="closeChoose" onClick={onClose}>
            &times;
          </button>
        </div>
        <img src="/paypal123.png" alt="walletLogo" className="chooseImg" />
        <div className="modalContentChooseDiv">
          <p className="choosePreference">Preferred when paying online</p>
          <p className="goodsAndServices">
            Setting a preferred way to pay online can help you check out even
            faster. Of course, you'll always be able choose a different way to
            pay at checkout.
          </p>
          <Link to="" className="morePreferences">
            More about payment preferences
          </Link>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="radio-preferred">
                  <label>
                    <Field
                      type="radio"
                      name="paypalPreferred"
                      value="preferred"
                    />
                    <img
                      src="/paypal123.png"
                      alt="walletLogo"
                      className="chooseImg1"
                    />
                    PayPal Balance
                  </label>
                </div>
                {errors.paypalPreferred && touched.paypalPreferred ? (
                  <div className="errorPreferred">{errors.paypalPreferred}</div>
                ) : null}
                <button className="btnChoose">
                  <span className="btnTChoose">Confirm</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default SetPreferredModal;
