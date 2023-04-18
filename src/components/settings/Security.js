import React from "react";
import "./Security.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function Security() {
  return (
    <div className="container">
      <Link to="" className="main1">
        <div className="main2">
          <p className="headers">Password</p>
          <p className="create">Create or update your password.</p>
        </div>
        <Link className="update">
          {" "}
          <span className="update-text">Update</span>
          <FontAwesomeIcon className="update-icon" icon={faEdit} />
        </Link>
      </Link>

      <Link className="main1">
        <div className="main2">
          <p className="headers">2-step verification</p>
          <p className="create">
            Add an extra layer of security to your account by using a one-time
            security code in addition to your password each time you log in.
          </p>
        </div>
        <Link className="update">
          {" "}
          <span className="update-text">Set Up</span>
          <FontAwesomeIcon className="update-icon" icon={faEdit} />
        </Link>
      </Link>

      <Link className="main1">
        <div className="main2">
          <p className="headers">Auto login</p>
          <p className="create">
            Checkout faster without having to log in every time. Manage auto
            login on your browsers and devices, including One Touch™
          </p>
        </div>
        <Link className="update">
          {" "}
          <span className="update-text">Update</span>
          <FontAwesomeIcon className="update-icon" icon={faEdit} />
        </Link>
      </Link>

      <Link className="main1">
        <div className="main2">
          <p className="headers">Security questions</p>
          <p className="create">
            For your protection, please choose 2 security questions. This way,
            we can verify it's really you if there's ever a doubt.
          </p>
        </div>
        <Link className="update">
          {" "}
          <span className="update-text">Create</span>
          <FontAwesomeIcon className="update-icon" icon={faEdit} />
        </Link>
      </Link>
    </div>
  );
}

export default Security;
