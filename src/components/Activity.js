import React, { useEffect, useRef, useState } from "react";
import "./Activity.css";
import { RiDownload2Fill } from "react-icons/ri";
import { BsBank } from "react-icons/bs";

const Activity = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      date: "3 Mar",
      type: "Payment",
      status: "Completed",
      amount: 125.0,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      date: "3 Mar",
      type: "Payment",
      status: "Completed",
      amount: 75.0,
    },
    // Add more transactions as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("3 Mar");
  const [filterType, setFilterType] = useState("Type");
  const [filterStatus, setFilterStatus] = useState("Status");
  const [hasOutline, setHasOutline] = useState(false);
  const inputRef = useRef(null);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const dateOptions = [
    "This Month",
    "Last Month",
    "Last 90 Days",
    "This Year",
    "Last Year",
  ];
  const typeOptions = ["Automatic Payments", "Payments", "Payments Received", "Refunds", "Transfers", "Reported Transactions"];
  const statusOptions = ["Incoming payments to review", "Tracking numbers to add", "Shipping labels to print", "Payment requests to review", "Invoices to pay", "Holds"];

  function handleButtonClick() {
    setIsOpen1(!isOpen1);
    setIsOpen2(false)
    setIsOpen3(false)
  }

  function handleButtonClick1() {
    setIsOpen2(!isOpen2);
    setIsOpen1(false)
    setIsOpen3(false)
  }

  function handleButtonClick2() {
    setIsOpen3(!isOpen3);
    setIsOpen2(false)
    setIsOpen1(false)
  }

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterDateChange = (option) => {
    setFilterDate(option);
    setIsOpen1(false);
  };

  const handleFilterTypeChange = (option) => {
    setFilterType(option);
    setIsOpen2(false);
  };

  const handleFilterStatusChange = (option) => {
    setFilterStatus(option);
    setIsOpen3(false);
  };

  const handleDownload = () => {
    // Implement download functionality here
  }; // You will need to implement this function

  const filteredTransactions = transactions.filter((transaction) => {
    const searchTermLowerCase = searchTerm.toLowerCase();

    // Check if transaction date matches filter
    if (filterDate !== "all" && transaction.date !== filterDate) {
      return false;
    }

    // Check if transaction type matches filter
    if (filterType !== "all" && transaction.type !== filterType) {
      return false;
    }

    // Check if transaction status matches filter
    if (filterStatus !== "all" && transaction.status !== filterStatus) {
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
              <button onClick={handleButtonClick}>Date: {filterDate}</button>
              {isOpen1 && (
                <div className="options">
                  {dateOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleFilterDateChange(option)}
          
                      type="radio"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <button onClick={handleButtonClick1}>{filterType}</button>
              {isOpen2 && (
                <div className="options">
                  {typeOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleFilterTypeChange(option)}
                      
                      type="radio"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button onClick={handleButtonClick2}>{filterStatus}</button>
              {isOpen3 && (
                <div className="options">
                  {statusOptions.map((option) => (
                    <div
                      key={option}
                      onClick={() => handleFilterStatusChange(option)}
                     
                      type="radio"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="transactionContainer">
        <p className="transactionStatus">Completed</p>
        <div className="month">
          <p className="eachMonth">Mar 2023</p>
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
                <p className="amount">- $300.00</p>
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
