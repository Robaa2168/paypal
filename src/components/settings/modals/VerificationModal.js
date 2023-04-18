import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import "./VerificationModal.css";

const initialValues = {
  verificationMethod: "",
};

const validationSchema = Yup.object({
  verificationMethod: Yup.string().required(""),
});

function VerificationModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal1">
      <div className="modal-content1">
        <div className="closeContainer1">
          <button className="close1" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="password1">
          <p className="passwordHeader1">
            Protect your account with 2-step verification
          </p>
          <p className="addition">
            Each time you log in, you'll use a one-time code in addition to your
            password. Choose how you'll get your code.
          </p>
          <p className="app">Need an authenticator app?</p>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="radio-options">
                  <label>
                    <Field type="radio" name="verificationMethod" value="app" />
                    Use an authenticator app
                  </label>
                  <label>
                    <Field type="radio" name="verificationMethod" value="key" />
                    Use a security key
                  </label>
                  {errors.verificationMethod && touched.verificationMethod ? (
                    <div className="error">{errors.verificationMethod}</div>
                  ) : null}
                </div>
                <button type="submit" className="btn1">
                  <span className="btnT1">Set It Up</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="logoContainer1">
          <img src="/paypal123.png" alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default VerificationModal;
