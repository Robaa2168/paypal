import React, { useState } from "react";
import "./Activity.css";
import { RiDownload2Fill } from "react-icons/ri";
import { BsBank } from "react-icons/bs";

const Activity = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      date: "2023-04-12",
      type: "Payment Received",
      status: "Completed",
      amount: 125.0,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      date: "2023-04-10",
      type: "Payment Sent",
      status: "Completed",
      amount: 75.0,
    },
    // Add more transactions as needed
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterDate, setFilterDate] = useState("all");
  const [filterType, setFilterType] = useState("all");
  const [filterStatus, setFilterStatus] = useState("all");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterDateChange = (event) => {
    setFilterDate(event.target.value);
  };

  const handleFilterTypeChange = (event) => {
    setFilterType(event.target.value);
  };

  const handleFilterStatusChange = (event) => {
    setFilterStatus(event.target.value);
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

  return (
    <div className="main">
      <div className="filters">
        <div className="header">
          <input
            type="text"
            placeholder="Search by name or email"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <button onClick={handleDownload}>
            <RiDownload2Fill size={20} />
          </button>
        </div>
        <div className="filterBy">
          {" "}
          <p>Filter by</p>
          <div>
            <select value={filterDate} onChange={handleFilterDateChange}>
              <option value="all">All Dates</option>
              <option value="2023-04-14">April 14, 2023</option>
              <option value="2023-04-13">April 13, 2023</option>
              <option value="2023-04-12">April 12, 2023</option>
              <option value="2023-04-11">April 11, 2023</option>
              <option value="2023-04-10">April 10, 2023</option>
            </select>
            <select value={filterType} onChange={handleFilterTypeChange}>
              <option value="all">All Types</option>
              <option value="Payment Sent">Payment Sent</option>
              <option value="Payment Received">Payment Received</option>
              <option value="Invoice Sent">Invoice Sent</option>
              <option value="Invoice Received">Invoice Received</option>
            </select>
            <select value={filterStatus} onChange={handleFilterStatusChange}>
              <option value="all">All Statuses</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
              <option value="Cancelled">Cancelled</option>
              <option value="Refunded">Refunded</option>
            </select>
          </div>
        </div>
      </div>

      <div>
        <p>Completed</p>
        <div className="month">
          <p>Mar 2023</p>
          {filteredTransactions.map((transaction) => 
          <div className="transaction">
            <div className="transactionHistory">
              <p className="bankIcon"><BsBank size={25} /></p>
              <div>
                <p>{transaction.name}</p>
                <div className="details">
                  <p>{transaction.date}</p>
                  {" "}
                  <p className="dot">.</p>
                  {" "}
                  <p>{transaction.type}</p>
                </div>
              </div>
            </div>
            <p>- $300.00</p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default Activity;
