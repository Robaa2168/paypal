import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./QuestionsModal.css";

const formValidationSchema = Yup.object().shape({
  answer1: Yup.string().required("Required."),
  answer2: Yup.string().required("Required."),
});

function QuestionsModal({ isVisible, onClose }) {
  if (!isVisible) {
    return null;
  }

  const handleSubmit = (values) => {
    console.log(values);
    // handle form submission here
  };

  return (
    <div className="modal3">
      <div className="modal-content3">
        <div className="closeContainer3">
          <button className="close3" onClick={onClose}>
            &times;
          </button>
        </div>
        <Formik
          initialValues={{
            question1: "",
            answer1: "",
            question2: "",
            answer2: "",
          }}
          onSubmit={handleSubmit}
          validationSchema={formValidationSchema}
        >
          {({ errors, touched }) => (
            <Form className="password3">
              <p className="passwordHeader3">Security Questions</p>
              <p className="addition3">
                We'll use these questions as a way to make sure it's your
                account, like if you need to reset your password
              </p>
              <div className="questionGroup">
                <div className="fieldContainer">
                  <label htmlFor="question1">Security question 1</label>
                  <Field as="select" name="question1">
                    <option value="">Select a question</option>
                    <option value="firstSchool">
                      What was the name of your first school?
                    </option>
                    <option value="firstPet">
                      What was the name of your first pet?
                    </option>
                    <option value="hospital">
                      What's the name of the hostpital in which you were born?
                    </option>
                    <option value="nickname">
                      What's the nickname of your oldest child?
                    </option>
                    <option value="middleName">
                      What's the middle name of your father?
                    </option>
                    <option value="childhoodToy">
                      What's the name of your favorite childhoon cudly toy?
                    </option>
                    <option value="firstRoommate">
                      Who was your first roommate?
                    </option>
                    <option value="maidenName">
                      What is the maiden name of your grandmother?
                    </option>
                  </Field>
                </div>
                <div className="currentPasswordDiv1">
                  <Field
                    name="answer1"
                    type="text"
                    placeholder="Answer"
                    className={`passwordField5 ${
                      errors.answer1 && touched.answer1 ? "error" : ""
                    }`}
                  />
                  <div className="errorContainer5">
                    <ErrorMessage
                      name="answer1"
                      component="p"
                      className="passwordError5"
                    />
                  </div>
                </div>
              </div>
              <div className="questionGroup1">
                <div className="fieldContainer">
                  <label htmlFor="question2">Security question 2</label>
                  <Field as="select" name="question2">
                    <option value="">Select a question</option>
                    <option value="firstSchool1">
                      What was the name of your first school?
                    </option>
                    <option value="firstPet1">
                      What was the name of your first peet?
                    </option>
                    <option value="hospital1">
                      What's the name of the hostpital in which you were born?
                    </option>
                    <option value="nickname1">
                      What's the nickname of your oldest child?
                    </option>
                    <option value="middleName1">
                      What's the middle name of your father?
                    </option>
                    <option value="childhoodToy1">
                      What's the name of your favorite childhoon cudly toy?
                    </option>
                    <option value="firstRoommate">
                      Who was your first roommate?
                    </option>
                    <option value="maidenName">
                      What is the maiden name of your grandmother?
                    </option>
                  </Field>
                </div>
                <div className="currentPasswordDiv1">
                  <Field
                    name="answer2"
                    type="text"
                    placeholder="Answer"
                    className={`passwordField5 ${
                      errors.answer2 && touched.answer2 ? "error" : ""
                    }`}
                  />
                  <div className="errorContainer5">
                    <ErrorMessage
                      name="answer2"
                      component="p"
                      className="passwordError5"
                    />
                  </div>
                </div>
              </div>
              <button type="submit" className="btn3">
                <span className="btnT3">Save</span>
              </button>
            </Form>
          )}
        </Formik>
        <div className="logoContainer3">
          <img src="/paypal123.png" alt="logo" className="logo" />
        </div>
      </div>
    </div>
  );
}

export default QuestionsModal;
