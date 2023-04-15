import React, { useEffect, useRef, useState } from "react";
import "./Activity.css";
import { RiDownload2Fill } from "react-icons/ri";
import { BsBank } from "react-icons/bs";
import Footer from './Footer';

const Activity = () => {
  // Sample data to use
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "Stanley Mayore",
      email: "stanmay@example.com",
      date: "Last 90 Days",
      type: "Payment",
      status: "Completed",
      amount: 125.0,
    },
    {
      id: 2,
      name: "Lee Stan",
      email: "email123@example.com",
      date: "Last 90 Days",
      type: "Payment",
      status: "Completed",
      amount: 75.0,
    },
    // Add more transactions as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("Last 90 Days");
  const [filterType, setFilterType] = useState("Type");
  const [filterStatus, setFilterStatus] = useState("Status");
  const [hasOutline, setHasOutline] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const inputRef = useRef(null);
  const divRef = useRef(null);

  // Options for date
  const dateOptions = [
    "This Month",
    "Last Month",
    "Last 90 Days",
    "This Year",
    "Last Year",
  ];

  //Options for type
  const typeOptions = [
    "Automatic Payments",
    "Payments",
    "Payments Received",
    "Refunds",
    "Transfers",
    "Reported Transactions",
  ];

  // Options for status
  const statusOptions = [
    "Incoming payments to review",
    "Tracking numbers to add",
    "Shipping labels to print",
    "Payment requests to review",
    "Invoices to pay",
    "Holds",
  ];

  // Handle pop up toggle for date
  function handleButtonClick() {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
    setIsOpen3(false);
  }

  // Handle pop up toggle for type
  function handleButtonClick1() {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
    setIsOpen3(false);
  }

  // Handle pop up toggle for status
  function handleButtonClick2() {
    setIsOpen3(!isOpen3);
    setIsOpen2(false);
    setIsOpen1(false);
  }

  // Handle input change
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle Date change
  const handleFilterDateChange = (option) => {
    setFilterDate(option);
    setIsOpen1(false);
  };

  // Handle type change
  const handleFilterTypeChange = (option) => {
    setFilterType(option);
    setIsOpen2(false);
  };

  // Handle status change
  const handleFilterStatusChange = (option) => {
    setFilterStatus(option);
    setIsOpen3(false);
  };

  const handleDownload = () => {
    // Implement download functionality here
  };

  // Filter transactions
  const filteredTransactions = transactions.filter((transaction) => {
    const searchTermLowerCase = searchTerm.toLowerCase();

    // Check if transaction date matches filter
    if (filterDate !== "all" && transaction.date !== filterDate) {
      return false;
    }

    // Check if transaction type matches filter
    if (filterType !== "Type" && transaction.type !== filterType) {
      return false;
    }

    // Check if transaction status matches filter
    if (filterStatus !== "Status" && transaction.status !== filterStatus) {
      return false;
    }

    // Check if transaction name or email matches search term
    if (
      !transaction.name.toLowerCase().includes(searchTermLowerCase) &&
      !transaction.email.toLowerCase().includes(searchTermLowerCase)
    ) {
      return false;
    }

    return true;
  });

  // Handle click event for input
  useEffect(() => {
    // Add event listener to detect clicks outside of input element
    document.addEventListener("click", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (inputRef.current && !inputRef.current.contains(event.target)) {
      setHasOutline(false);
    }
  };

  // Handle click event for filter buttons and toggle div
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (e) => {
    if (divRef.current && !divRef.current.contains(e.target)) {
      setIsOpen1(false);
      setIsOpen2(false);
      setIsOpen3(false);
    }
  };

  // Handle outline for search input field
  const handleOutline = () => {
    setHasOutline(true);
  };

  return (
    <div className="main">
      <div className="filters">
        <div className="header">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearchTermChange}
            className={hasOutline ? "inputOutline" : ""}
            onClick={handleOutline}
            ref={inputRef}
          />
          <button onClick={handleDownload}>
            <RiDownload2Fill size={20} />
          </button>
        </div>
        <div className="filterBy">
          {" "}
          <p className="filterText">Filter by</p>
          <div className="allFilters">
            <div>
              <button onClick={handleButtonClick} className="button1">
                Date: {filterDate}
              </button>
              {isOpen1 && (
                <div className="options" id="options3" ref={divRef}>
                  <p className="optionsDate">Date</p>
                  {dateOptions.map((option) => (
                    <label key={option} style={{ display: "block" }}>
                      <input
                        key={option}
                        onClick={() => handleFilterDateChange(option)}
                        type="radio"
                        value={option}
                        name="option"
                        checked={filterDate === option}
                        className="optionsInput"
                      />

                      {option}
                    </label>
                  ))}
                  <div className="choose">
                    <p>Choose a date range</p>
                    <div>
                      <input type="date" placeholder="Start" />
                      <input
                        type="date"
                        className="secondDate"
                        placeholder="End"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div id="hide">
              <button onClick={handleButtonClick1} className="button1">
                {filterType !== "Type" ? `Type: ${filterType}` : "Type"}
              </button>
              {isOpen2 && (
                <div className="options button2" ref={divRef}>
                  <p className="optionsDate">Type</p>
                  {typeOptions.map((option) => (
                    <label key={option} style={{ display: "block" }}>
                      <input
                        key={option}
                        onClick={() => handleFilterTypeChange(option)}
                        type="radio"
                        value={option}
                        checked={filterType === option}
                        name="option"
                        className="optionsInput"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>

            <div id="hide">
              <button onClick={handleButtonClick2} className="button1">
                {filterStatus !== "Status"
                  ? `Status: ${filterStatus}`
                  : "Status"}
              </button>
              {isOpen3 && (
                <div className="options" ref={divRef}>
                  <p className="optionsDate">Status</p>
                  {statusOptions.map((option) => (
                    <label key={option} style={{ display: "block" }}>
                      <input
                        key={option}
                        onClick={() => handleFilterStatusChange(option)}
                        type="radio"
                        value={option}
                        checked={filterStatus === option}
                        name="option"
                        className="optionsInput"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="transactionContainer">
        {filteredTransactions.length !== 0 ? (
          <p className="transactionStatus">Completed</p>
        ) : (
          <></>
        )}
        <div className="month">
          {filteredTransactions.length !== 0 ? (
            <p className="eachMonth">Mar 2023</p>
          ) : (
            <></>
          )}
          {filteredTransactions.length !== 0 ? (
            filteredTransactions.map((transaction) => (
              <div className="transaction">
                <div className="transactionHistory">
                  <p className="bankIcon">
                    <BsBank size={25} />
                  </p>
                  <div className="transactionDetails">
                    <p className="name">{transaction.name.toUpperCase()}</p>
                    <div className="details">
                      <p>{transaction.date}</p> <p className="dot">.</p>{" "}
                      <p>{transaction.type}</p>
                    </div>
                  </div>
                </div>
                <p className="amount">
                  - ${parseFloat(transaction.amount).toFixed(2)}
                </p>
              </div>
            ))
          ) : (
            <div className="notAvailable">
              <p className="noTransaction">No transaction yet.</p>
              <p className="tryAgain">
                Want to try again with different dates?
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Activity;
