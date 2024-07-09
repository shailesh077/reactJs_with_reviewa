import React, { useState, useEffect } from 'react'
import "../screen3/screen.css"
import { useNavigate } from "react-router-dom"
import VeryBad from "../../assets/image/VeryBad.png"
import Bad from "../../assets/image/Bad.png"
import Average from "../../assets/image/Average.png"
import Good from "../../assets/image/Good.png"
import Perfect from "../../assets/image/Perfect.png"
import Stopwatch from "../../assets/image/stopwatch.png"
import { setSubmission } from '../../submissionData';
const emojis = [
  { id: "VeryBad", emoji: <img className="Emoji" src={VeryBad} alt="" /> },
  { id: "Bad", emoji: <img className="Emoji" src={Bad} alt="" /> },
  { id: "Average", emoji: <img className="Emoji" src={Average} alt="" /> },
  { id: "Good", emoji: <img className="Emoji" src={Good} alt="" /> },
  { id: "Perfect", emoji: <img className="Emoji" src={Perfect} alt="" /> },
];
function ThirdPage() {
  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const [timeLeft, setTimeLeft] = useState(120);
  const [submissionTime, setSubmissionTime] = useState(null);
  

  const navigate = useNavigate()

  

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
  const handleEmojiClick = (emoji) => {
    setSelectedEmoji(emoji);
    setSubmissionTime(timeLeft);
    
  };
  const handleNextQuestion = () => {
    if (selectedEmoji !== null) {
      const newSubmission = {
        question: 'Interest Rates',
        emoji: selectedEmoji,
        time: formatTime(120 - submissionTime),
      };
      setSubmission(newSubmission);
      console.log('Submission:', newSubmission);
    }
    navigate("/fourpage")
    
    // Logic to go to the next question
    // For example, you could redirect to another component/page
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  

  return (
    <div className='box'>
      <div className="heading">
        <h2 className='text'><b>Interest Rates and Fees</b></h2>
        <p className='text'>How would you rate the competitiveness of our interest rates and fees?</p>
      </div>
      
      <div className="Emojis"  >
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
        <button type='submit' onClick={handleNextQuestion}>Next Question</button>
        </div>
        <div>
          <p className='text'>Remaining Question 2/3 </p>
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
  )
}

export default ThirdPage