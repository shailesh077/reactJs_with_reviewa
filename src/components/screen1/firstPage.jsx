import React from 'react'
import "../screen1/styles.css"
import { useNavigate } from 'react-router-dom';



function FirstPage() {
  const navigate = useNavigate()

  const goToNextPage = () => {
    navigate('/secondPage');
  };

  return (
    <div className='firstPage'>
      <h1 className='h1'><b>Credit Card</b></h1>
      <h2>Customer Satisfaction Survey</h2>

      <p className='p'>We value your feedback! At Gold Credit Card, we are dedicated to providing you with the best possible credit card experience. Your responses to this survey will help us understand what we're doing well and where we can improve. The survey should take about 5 minutes to complete. Thank you for your time and valuable input!</p>

      <button className="button" onClick={goToNextPage}>Click to Start</button>
    </div>
  );
}

export default FirstPage