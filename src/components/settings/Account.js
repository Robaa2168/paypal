import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faShieldAlt } from "@fortawesome/free-solid-svg-icons";
import Select, { components } from "react-select";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { IoCheckmark } from "react-icons/io5";

const DropdownIndicator = (props) => {
  const iconStyle = {
    fontSize: "1.5rem",
  };

  return (
    <components.DropdownIndicator {...props}>
      {props.selectProps.menuIsOpen ? (
        <span style={iconStyle}>
          <MdExpandLess />
        </span>
      ) : (
        <span style={iconStyle}>
          <MdExpandMore />
        </span>
      )}
    </components.DropdownIndicator>
  );
};

const SingleValue = ({ children, label, ...props }) => (
  <components.SingleValue {...props}>
    <div className="select-label-container">
      <span className="select-label">{label}</span>
      <span className="select-selected-value">{children}</span>
    </div>
  </components.SingleValue>
);

const customStyles = {
  dropdownIndicator: (base) => ({
    ...base,
    borderLeft: "none",
  }),
  option: (base, { isSelected }) => ({
    ...base,
    backgroundColor: isSelected ? "transparent" : base.backgroundColor,
    fontWeight: isSelected ? "bold" : base.fontWeight,
    color: isSelected ? "black" : base.color,
  }),
};

const Option = (props) => {
  const { children, isSelected, ...rest } = props;
  return (
    <components.Option {...rest}>
      <div className="select-option-content">
        {children}
        {isSelected && <IoCheckmark className="select-option-checkmark" />}
      </div>
    </components.Option>
  );
};

function Account() {
  const languageOptions = [
    { value: "English", label: "English" },
    { value: "Francais", label: "Francais" },
    { value: "Espanol", label: "Espanol" },
  ];

  const zoneOptions = [
    { value: "(GMT-08:00) Pacific Time", label: "(GMT-08:00) Pacific Time" },
  ];

  const handleChange = (selectedOption) => {
    console.log(`Option selected:`, selectedOption);
  };

  return (
    <div className="main">
      <div className="profile">
        <div className="profileDetails">
          <div className="joined">
            <div className="dateJoined">
              <p className="dateJoined1">Profile</p>
              <p className="dateJoined2">Joined in 2019</p>
            </div>
            <p className="userImage">Image</p>
          </div>

          <div className="profileName">
            <p className="addEmail1">Stanley Mayore</p>
            <Link className="changeName addEmail2">Change name</Link>
          </div>
        </div>

        <div className="profileId">
          <p className="options">Account Options</p>
          <Select
            defaultValue={languageOptions[0]}
            options={languageOptions}
            components={{
              DropdownIndicator,
              SingleValue: (props) => (
                <SingleValue {...props} label="Language" />
              ),
              Option,
            }}
            onChange={handleChange}
            className="selectOptions"
            styles={customStyles}
          />
          <Select
            defaultValue={zoneOptions[0]}
            options={zoneOptions}
            components={{
              DropdownIndicator,
              SingleValue: (props) => (
                <SingleValue {...props} label="Time Zone" />
              ),
              Option,
            }}
            onChange={handleChange}
            className="selectOptions"
            styles={customStyles}
          />
          <div className="nationality">
            <p className="kenyan">Nationality</p>
            <p className="kenyan1">Kenya</p>
          </div>

          <div className="merchant">
            <p className="kenyan">Merchant ID</p>
            <p className="kenyan1">LV3C2EXEWPYCJ</p>
          </div>

          <div className="national">
            <p className="kenyan">National ID</p>
            <div className="idNumber">
              <p className="kenyan1">3....21</p>
              <Link className="edit">Edit</Link>
            </div>
          </div>

          <Link className="passport">Add Passport</Link>

          <div className="features">
            <FontAwesomeIcon icon={faShieldAlt} className="icon" />
            <div className="business">
              <p className="unlock">
                Unlock new features like express checkout
              </p>
              <Link className="upgrade">Upgrade to a Business acount</Link>
            </div>
          </div>

          <div className="closeAccount">
            <FontAwesomeIcon icon={faUserCircle} className="icon" />
            <p className="close">Close your account</p>
          </div>
        </div>
      </div>

      <div className="address">
        <div className="addressEmail">
          <div className="addEmail">
            <p className="addEmail1">Email</p>
            <Link className="addEmail2">Add</Link>
          </div>

          <div className="primaryEmail">
            <p className="primaryEmailP">Primary</p>
            <div className="changeEmail">
              <p className="changeEmailP">stan@gmail.com</p>
              <Link className="changeEmailL">Change</Link>
            </div>
          </div>

          <p className="emailDesc">
            To update an email address, you must have at least two email
            addresses on file.
          </p>
        </div>

        <div className="addressNumber">
          <div className="addPhoneNumbers">
            <p className="addEmail1">Phone Numbers</p>
            <Link className="addEmail2">Add</Link>
          </div>

          <div className="mobile">
            <div className="mobilePrimary">
              <p className="mobileNumber">Mobile</p>
              <p className="primaryEmailP">Primary</p>
            </div>
            <div className="phoneNumber">
              <p className="myNumber">07*****434</p>
              <Link className="addEmail2">Change</Link>
            </div>
          </div>
        </div>

        <div className="addressAddress">
          <div className="addAddress">
            <p className="addEmail1">Addresses</p>
            <Link className="addEmail2">Add</Link>
          </div>
          <div className="primaryAddress">
            <p className="primaryEmailP">Primary</p>
            <div className="place">
              <div className="address1">
                <p>209</p>
                <p>209</p>
                <p>Keroka</p>
                <p>Nyamira County 40202</p>
              </div>
              <Link className="addEmail2">Edit</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
