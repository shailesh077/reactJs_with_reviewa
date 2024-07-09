
# Review App

I have created a review page with the help of React JS


## Authors

- [@Shailesh Vishwakarma](https://www.github.com/shailesh077)


## Demo

Insert gif or link to demo

https://github.com/shailesh077/reactJs_with_reviewa.git
https://reactjs-with-reviewa-2.onrender.com/
## Deployment

To deploy this project run

```bash
  npx create-react-app my-reviewapp
```
I have create my project in reactjs
## Features

- yellow mode toggle
- Live previews
- Fullscreen mode
- store data localHost live


## Installation

Install my-project with npm

```bash
  npx create-react-app my-reviewapp
  cd my-reviewapp
```
    
## Lessons Learned

From this project, I got to learn a lot about how to hook, how to create UI in React and improved my problem solving skills. In this project, I also got to know about local storage and how we can store data in local storage.

I faced many problems while making the project like making a stop watch and storing the time on clicking the submit button and hovering over the star and storing it in the database.


## Related

Here are some related projects

[Live](https://reactjs-with-reviewa-2.onrender.com/)


## Run Locally

Install dependencies

```bash
  npm install
  npm i react-router-dom
  npm install --save react-router-dom
  npm i nodemon
```




## Tech Stack

**Client:** React,HTML,CSS,Javascript

**Server:** Node 


## Usage/Examples
Screen 1:

Implement a click event handler for the "Click to Start" button.

```javascript
<button className="button" onClick={goToNextPage}>Click to Start</button>
    </div>
```

•When the button is clicked, it should redirect the user to Screen 2.

```javascript
const goToNextPage = () => {
    navigate('/secondPage');
  };
```
Screen 2:
Implement a hover effect on emojis.
using CSS class 

```javascript
<span
            key={emoji.id}
            className={`emoji ${selectedEmoji === emoji.id ? 'selected' : ''}`}
            onClick={() => handleEmojiClick(emoji.id)}
          >
            {emoji.emoji}
          </span>
```
Implement a timer on the right side.
using useEffect and chatGPT
```javascript
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
```
o	The timer should count down from 2 minutes.

o	If the user doesn't submit a response within 2 minutes, redirect to the next question.
-->I have set conditions in this file with the help of which when the time is over inside it, then navigate will be called and I will go to the next page
```javascript
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
```
Screen 3: 

Implement functionality to select stars.

•	If the user selects the 4th star, automatically select the 1st to 4th stars.

-> used keys to render the data which gave me the hover effect 
```javascript
<span
            key={emoji.id}
            className={`emoji ${selectedRating >= emoji.id ? 'selected' : ''}`}
            onClick={() => handleEmojiClick(emoji.id)}
            onMouseEnter={()=>handleemojiname(emoji.emoji)}
            
          >
            <img className="Emoji" src={emoji.src}  />{emoji.emoji}
          </span>
    </div>
```
Screen 4:

Fetch data from the JSON file where survey responses are stored.
•	Display the fetched data on this screen.

--> Whatever data we have received in Json format, now I have to store that data in a database so that I can see it on the view page or the result page. For this, I use a local database. This gives me live data and displays that data on the result page.

```javascript
export const setSubmission = (newSubmission) => {
    const submissions = JSON.parse(localStorage.getItem('submissions')) || [];
    submissions.push(newSubmission);
    localStorage.setItem('submissions', JSON.stringify(submissions));
};

export const getSubmissions = () => {
    return JSON.parse(localStorage.getItem('submissions')) || [];
};
    </div>
```


```javascript
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

```