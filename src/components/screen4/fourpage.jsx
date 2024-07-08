import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import "../screen2/screen.css";

import VeryBad from "../../assets/image/one_star.png";
import Bad from "../../assets/image/two_star.png";
import Average from "../../assets/image/three_star.png";
import Good from "../../assets/image/four_star.png";
import Perfect from "../../assets/image/five_star.png";
import Stopwatch from "../../assets/image/stopwatch.png";
import { setSubmission } from '../../submissionData';

const emojis = [
  { id: 1, src: VeryBad, emoji: "Very Bad" },
  { id: 2, src: Bad, emoji: "Bad" },
  { id: 3, src: Average, emoji: "Average" },
  { id: 4, src: Good, emoji:"Good" },
  { id: 5, src: Perfect, emoji: "Perfect" },
];

function Fourpage() {

  

  const [selectedRating, setSelectedRating] = useState(0);
  const [timeLeft, setTimeLeft] = useState(120);
  const [submissionTime, setSubmissionTime] = useState(null);
  const[emojiName,setEmojiName]=useState()
  
  
  
  const navigate = useNavigate();

  
    
  

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleNextQuestion();
          
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleEmojiClick = (rating) => {
    setSelectedRating(rating)
    setSubmissionTime(timeLeft);
  };
  const handleemojiname=(emoji)=>{
    setEmojiName(emoji)
  }
  

  const handleNextQuestion = () => {
    if (selectedRating !== 0 && emojiName !==null) {
      const newSubmission = {
        question: 'Mobile Banking',
        id: selectedRating,
        time: formatTime(120 - submissionTime),
        emoji:emojiName
      };
      setSubmission(newSubmission);
      console.log('Submission:', newSubmission);
    }
    navigate('/fivepage');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  

  
  return (
    <div className='box'>
      <div className="heading">
        <h2 className='text'><b>Online and Mobile Banking</b></h2>
        <p className='text'>How would you rate your experience with our online<br /> and mobile banking services?</p>
      </div>
      <div className="Emojis">
        {emojis.map((emoji) => (
          <span
            key={emoji.id}
            className={`emoji ${selectedRating >= emoji.id ? 'selected' : ''}`}
            onClick={() => handleEmojiClick(emoji.id)}
            onMouseEnter={()=>handleemojiname(emoji.emoji)}
            
          >
            <img className="Emoji" src={emoji.src}  />{emoji.emoji}
          </span>
        ))}
      </div>
      <div className='lastLine'>
        <div>
          <button type='submit' onClick={handleNextQuestion}>Next Question</button>
        </div>
        <div>
          <p className='text'>Remaining Question 3/3 </p>
        </div>
        <div className='footer'>
          <img className="timeEmoji" src={Stopwatch} alt="" />
          <div>
            <p className='remaining'>Time Remaining </p>
            <b className='text'><span>{formatTime(timeLeft)}</span></b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fourpage;
