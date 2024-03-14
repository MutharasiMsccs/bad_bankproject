
import React from 'react';
import './style.css';
import { useAppContext } from './Appcontext';

const HomePage = () => {
  const { setCurrentPage } = useAppContext();

  const handleButtonClick = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="home-page">
      <div className="action-buttons">
        <button className="btn" onClick={() => handleButtonClick('login')} >
          Login
        </button>
        <button className="btn" onClick={() => handleButtonClick('createAccount')}>
          Sign Up
        </button>
      </div>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/013/948/616/small/bank-icon-logo-design-vector.jpg'  alt="Bank Logo"/>
      <h2 className='center'>Welcome to the Trust Financial Bank</h2>
     
      
      <p className='center'>Trust Financial Bank is a forward-thinking financial institution dedicated to providing a secure and trustworthy platform for individuals and businesses to manage their finances.<br>
      </br> Committed to transparency, integrity, and customer-centric services, Trust Financial Bank strives to build lasting relationships with its clients.</p>
    </div>

  );
};

export default HomePage;
