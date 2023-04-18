import React from "react";
import "./PasswordModal.css";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const formValidationSchema = Yup.object().shape({
  currentPassword: Yup.string().required("Please enter your current password"),
  newPassword: Yup.string().required("Please enter a new password"),
  confirmNewPassword: Yup.string().required("Please confirm your new password"),
});

const changePasswordInitials = {
  currentPassword: "",
  newPassword: "",
  confirmNewPassword: "",
};

function PasswordModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="closeContainer">
          <button className="close" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="password">
          <p className="passwordHeader">Change your password</p>
          <Formik
            initialValues={changePasswordInitials}
            validationSchema={formValidationSchema}
            //  onSubmit={}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="currentPassword1">
                  <p className="currentPasswordP">
                    Confirm your current password
                  </p>
                  <div className="currentPasswordDiv">
                    <Field
                      name="currentPassword"
                      type="password"
                      placeholder="Current password"
                      className={`passwordField ${
                        errors.currentPassword && touched.currentPassword
                          ? "error"
                          : ""
                      }`}
                    />
                    <div className="errorContainer">
                      <ErrorMessage
                        name="currentPassword"
                        component="p"
                        className="passwordError"
                      />
                    </div>
                  </div>
                </div>

                <div className="secureAccount">
                  <p className="currentPasswordP">
                    Enter your new password (Keep your account more secure.
                    Don't use your name.)
                  </p>
                  <div className="changePassword">
                    <div className="changePassword1">
                      <Field
                        name="newPassword"
                        type="password"
                        placeholder="New password"
                        className={`passwordField ${
                          errors.newPassword && touched.newPassword
                            ? "error"
                            : ""
                        }`}
                      />
                      <div className="errorContainer">
                        <ErrorMessage
                          name="newPassword"
                          component="p"
                          className="passwordError"
                        />
                      </div>
                    </div>
                    <div className="changePassword2">
                      <Field
                        name="confirmNewPassword"
                        type="password"
                        placeholder="Confirm new password"
                        className={`passwordField ${
                          errors.confirmNewPassword &&
                          touched.confirmNewPassword
                            ? "error"
                            : ""
                        }`}
                      />
                      <div className="errorContainer">
                        <ErrorMessage
                          name="confirmNewPassword"
                          component="p"
                          className="passwordError"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <button type="submit" className="btn">
                  <span className="btnT">Change Password</span>
                </button>
              </Form>
            )}
          </Formik>
        </div>
        <div className="logoContainer">
          <img src="/paypal123.png" alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default PasswordModal;
