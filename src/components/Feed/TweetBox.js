import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";

import "./TweetBox.css";
function TweetBox({ posts , tweets, setDatas}) {

  
  const [tweetInput, setTweetInput] = useState("");
  // const [tweetInputData , setTweetInputData] = useState({})

  const handleTweetInput = (e) => {
    setTweetInput(e.target.value);
  };

  

  const handleSubmit = (e) => {
    e.preventDefault()
    if(tweetInput === ""){

    }
    else{
    setTweetInput("")
    posts((prev) => {
      const date = new Date()
      
      let data = {
        id: prev.length + 1,
        tweet: tweetInput,
        userName: "tanmay",
        date: date.toLocaleTimeString("en-US", {year: "numeric", month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit", second: "2-digit"})
      };
      
      return [...prev, data].sort( (a,b) => {
        return  new Date(b.date) - new Date(a.date) 
      });
    });


    
  }
  };

  return (
    <div className="tweetBox">
      <form onSubmit={handleSubmit}>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1348689209469534209/6OuN3BwE_400x400.jpg" />
          <input
            placeholder="What's happening?"
            type="text"
            onChange={handleTweetInput}
            value={tweetInput}
          />
        </div>
        <Button className="tweetBox__tweetButton" onClick={handleSubmit}>
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
