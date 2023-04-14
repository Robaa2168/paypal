import React, { useState } from 'react';

const SendMoney = () => {
  const [requester, setRequester] = useState('');
  const [amount, setAmount] = useState(0);

  const handleRequestMoney = () => {
    // logic to request money
  }

  return (
    <div>
      <h1>Request Money</h1>
      <form onSubmit={handleRequestMoney}>
        <label htmlFor="requester">Requester:</label>
        <input type="text" id="requester" value={requester} onChange={(e) => setRequester(e.target.value)} />

        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />

        <button type="submit">Request Money</button>
      </form>
    </div>
  );
}

export default SendMoney;
