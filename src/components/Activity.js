/* Define layout for the main container */
.main {
  margin: 0 auto;
  max-width: 800px;
  padding: 20px;
  font-family: Arial, sans-serif;
}

/* Style the header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

/* Style the search input */
input[type="text"] {
  border: none;
  border-radius: 1.6rem;
  padding: 0.8rem 1.3rem;
  font-size: 1.1rem;
  background-color: white;
  width: 85%;
  border: 1px solid rgb(226, 219, 219);
}

/* Style the search input when it has an outline */
input[type="text"]:focus {
  outline: none;
  border: 1px solid #046096;
  box-shadow: 0px 0px 5px #0079C1;
}

.inputOutline:focus {
  outline: none;
  border: 1px solid #046096;
  box-shadow: 0px 0px 5px #0079C1;
}

/* Style the button for downloading transactions */
.header button {
  margin-top: auto;
  margin-bottom: auto;
  padding: 0.3rem 0.5rem;
  border-radius: 50%;
  cursor: pointer;
  color: rgb(28, 28, 196);
  border: none;
}

/* Style the filters container */
.filters {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

/* Style the filter's display */
.allFilters {
  display: flex;
}

/* Style the filter header */
.filterText {
  margin-right: 10px;
  font-size: 16px;
  font-weight: bold;
  text-align: left;
}

/* Style the filter buttons */
button.button1 {
  display: flex;
  align-items: center;
  background-color: white;
  color: #0079C1;
  border: 1px solid rgb(226, 219, 219);
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 20px;
  margin-right: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

/* Style the filter buttons when they are open */
button.button3,
button.button2 {
  background-color: #0079C1;
  color: #FFFFFF;
}

/* Style the filter button options */
.options {
  position: fixed;
  display: flex;
  flex-direction: column;
  background-color: #FFFFFF;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  margin-top: 7px;
  z-index: 99;
  text-align: left; /* Add this line to align text to the left */
}


/* Style the filter option labels */
label {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
  text-align: left; /* Add this line to align text to the left */
}

/* Style the filter option inputs */
input[type="radio"] {
  margin-right: 10px;
}

.choose {
  border-top: 1px solid rgb(226, 219, 219);
  margin-top: 0.5rem;
  padding: 8px 0;
}

input[type="date"] {
  background-color: white;
  color: #0079C1;
  border: 2px solid rgb(226, 219, 219);
  font-size: 14px;
  padding: 10px 8px;
  cursor: pointer;
}

input[type="date"]:focus {
  outline: none;
  border: 2px solid #046096;
  box-shadow: 0px 0px 7px #0079C1;
}

.secondDate {
  margin-left: 10px;
}

/* Style the transaction container */
.transactionContainer {
  display: flex;
  flex-direction: column;
}

/* Style the transaction status */
.transactionStatus {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: left; /* Add this line to align left */
}

/* Style the month */
.month {
  display: flex;
  flex-direction: column;
  align-items: left;
  
}

/* Style each transaction */
.transaction {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 2px solid;
  border-color: rgb(224, 220, 220);
  border-radius: 0.6rem;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  padding: 0.7rem 0.8rem;
  margin-top: 1rem;
  margin-top: 1rem;
}

/* Style the transaction history */
.transactionHistory {
  display: flex;
  align-items: center;
}

/* Style the bank icon */
.bankIcon {
  background-color: rgb(138, 67, 138);
  color: #FFFFFF;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  margin: auto 0.7rem;
}

/* Style the transaction details */
.transactionDetails {
  display: flex;
  flex-direction: column;
  text-align: left;
}

/* Style the transaction name */
.name {
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 5px;
}

/* Style the transaction details text */
.details {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #6D6D6D;
}

/* Style the dot between transaction details */
.dot {
  margin: 0 10px;
}

/* Style the transaction amount */
.amount {
  font-size: 12px;
  font-weight: bold;
}

/* Style the not available message */
.notAvailable {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  text-align: center;
}

/* Style the no transaction message */
.noTransaction {
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 10px;
}

/* Style the try again message */
.tryAgain {
  margin-top: 1px;
  color: #6D6D6D;
}

/* Style the outline for the filter button when it's clicked */
.button1:focus,
.button2:focus,
.button3:focus {
  outline: none;
  border: 1px solid #046096;
  box-shadow: 0px 0px 5px #0079C1;
}

.optionsInput::active {
  background-color: #dceffa;
  border: 1px solid #dceffa;
}

/* Style the scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #F2F2F2;
}

::-webkit-scrollbar-thumb {
  background-color: #0079C1;
  border-radius: 20px;
}

/* Style the options when the scrollbar is activated */
.options::-webkit-scrollbar-thumb {
  background-color: #FFFFFF;
}

/* Style the options when there is no scrollbar */
.options:not(:hover)::-webkit-scrollbar-thumb {
  background-color: #F2F2F2;
}

/* Media queries for responsive design */
@media (max-width: 768px) {

  .main {
    padding: 12px;
  }

  .eachMonth {
    text-align: left;
  }

  input[type="text"] {
    width: 95%; /* Decrease the percentage value to bring it closer to the magnifying glass icon */
  }

  .filterText {
    margin-right: 10px;
    font-size: 16px;
    font-weight: bold;
    text-align: left; /* Add this line to align left */
  }
  #hide {
    display: none;
  }

  #options3 {
    width: 88%;
  }

  input[type="date"] {
    display: flex;
    flex-wrap: wrap;
    width: 90%;
    margin: 5px auto;
  }

  .secondDate {
    margin-left: 0;

  }

  label {
    margin-bottom: 5px;
  }
}
