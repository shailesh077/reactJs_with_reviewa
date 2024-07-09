import React, { useState, useEffect } from 'react';
import "../screen2/screen.css";
import { useNavigate } from "react-router-dom";
import VeryBad from "../../assets/image/VeryBad.png";
import Bad from "../../assets/image/Bad.png";
import Average from "../../assets/image/Average.png";
import Good from "../../assets/image/Good.png";
import Perfect from "../../assets/image/Perfect.png";
import Stopwatch from "../../assets/image/stopwatch.png";
import { setSubmission } from '../../submissionData'; // Ensure this function stores data locally

const emojis = [
  { id: "VeryBad", emoji: <img className="Emoji" src={VeryBad} alt="Very Bad" /> },
  { id: "Bad", emoji: <img className="Emoji" src={Bad} alt="Bad" /> },
  { id: "Average", emoji: <img className="Emoji" src={Average} alt="Average" /> },
  { id: "Good", emoji: <img className="Emoji" src={Good} alt="Good" /> },
  { id: "Perfect", emoji: <img className="Emoji" src={Perfect} alt="Perfect" /> },
];

function SecondPage() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes = 120 seconds
  const [submissionTime, setSubmissionTime] = useState(null);
  

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          // Redirect to next question if time runs out
          handleNextQuestion();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleEmojiClick = (emojiId) => {
    setSelectedEmoji(emojiId);
    setSubmissionTime(timeLeft);
    
  };

  const handleNextQuestion = () => {
    if (selectedEmoji !== null) {
      const newSubmission = {
        question: 'Overall Satisfaction',
        emoji: selectedEmoji,
        time: formatTime(120 - submissionTime),
      };
      setSubmission(newSubmission);
      console.log('Submission:', newSubmission);
    }
    // Logic to go to the next question
    navigate('/thirdPage');
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className='box'>
      <div className="heading">
        <h2 className='text'><b>Overall Satisfaction</b></h2>
        <p className='text'>How satisfied are you with your overall experience with our credit card?</p>
      </div>
      
      <div className="Emojis">
        {emojis.map((emoji) => (
          <span
            key={emoji.id}
            className={`emoji ${selectedEmoji === emoji.id ? 'selected' : ''}`}
            onClick={() => handleEmojiClick(emoji.id)}
          >
            {emoji.emoji}
          </span>
        ))}
      </div>
      <div className='lastLine'>
        <div>
          <button type='button' onClick={handleNextQuestion}>Next Question</button>
        </div>
        <div>
          <p className='text'>Remaining Question 1/3 </p>
        </div>
        <div className='footer'>
          <img className="timeEmoji" src={Stopwatch} alt="Stopwatch" />
          <div>
            <p className='remaining'>Time Remaining </p>
            <b className='text'><span>{formatTime(timeLeft)}</span></b>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondPage;
