import React from 'react'
import { useNavigate } from "react-router-dom";
import Check from "../../assets/image/check.png"
import "../screen5/screen2.css"

function Fivepage(){

const navigate = useNavigate();

  const goToNextPage = () => {
    navigate('/resultitem');
  };



  return (
    <div className='box'>
        <div className='thankyou'>
            <img className='check' src={Check} alt="" />
            <p className='thanks'>Thank You </p>
            <p>Your answers have been sent</p>
        </div>
        <div>
            <p>Thank you for taking the time to complete this survey.<br/> Your feedback is invaluable to us <br/>and helps us serve you better.</p>
        </div>
        <div>
        <button type='submit' onClick={goToNextPage}>Result</button>
        </div>
    </div>
  )
}

export default Fivepage