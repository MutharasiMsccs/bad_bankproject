import React, { useState } from 'react';
import { useAppContext } from './Appcontext';

const WithdrawPage = () => {
  const { loggedInUser,  setLoggedInUser ,setUsers} = useAppContext();
  const [amount, setAmount] = useState(0);

  
  const handleWithdraw = () => {
    const withdrawAmount = parseInt(amount);
  
    if (withdrawAmount <= loggedInUser?.balance) {
      const newBalance = loggedInUser.balance - withdrawAmount;
  
      setLoggedInUser({
        ...loggedInUser,
        balance: newBalance,
      });
  
      
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.accountNumber === loggedInUser.accountNumber
            ? { ...user, balance: newBalance }
            : user
        )
      );
    } else {
      alert("Insufficient funds!");
    }
  
    setAmount('');
  };
  

  const buttonStyle = {
    backgroundColor: parseInt(amount) <= 0 ? 'lightgray' : 'black',
    color: 'white',
    cursor: parseInt(amount) <= 0 ? 'not-allowed' : 'pointer',
  };

  return (
    <div className="deposit-page">
      <img
        src="https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small/bank-icon-logo-design-vector.jpg"
        alt="login form"
        className="img-fluid"
      />
      <br></br>
      <h1>ATM Withdraw</h1>
      <br></br>
      <p>Account Number: {loggedInUser?.accountNumber}</p>
      <br></br>
      <h3 id="balance">Account Balance {loggedInUser?.balance}</h3>
      <br></br>
      <label>Enter the Amount</label>
      <input
        type="number"
        placeholder="Enter the Amount"
        value={amount}
        className="transparent-input"
        onChange={(e) => setAmount(e.target.value)}
      />
      <br></br>
      <button onClick={handleWithdraw} style={buttonStyle} disabled={parseInt(amount) <= 0}>
        Withdraw
      </button>
      <p className='center'>Please remember your account number for next login</p>
    </div>
  );
};

export default WithdrawPage;
