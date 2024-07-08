import React, { useEffect, useState } from "react";
import { getSubmissions } from "../../submissionData";


const ResultItem = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const submissionData = await getSubmissions(); // Call the function to get the data
        // Filter out any null or undefined entries
        const validData = submissionData.filter(item => item != null);
        // Slice to get only the latest 3 entries
        const latestData = validData.slice(-3);
        setData(latestData);
      } catch (error) {
        console.error('Error fetching submissions:', error);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div className='box'>
      <h1><b>Result</b></h1>
      <p>Your survey result is available here</p>
      <div>
        
        {data.length > 0 ? (
          data.map((item, index) => (
            <div key={index}>
              
                <div className="dataitembox">
                <div className="dataitem">{item.question}</div>
                <div className="dataitem">{item.emoji}</div>
                <div className="dataitem">{item.time}</div>
                </div><hr />
              

            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default ResultItem;
