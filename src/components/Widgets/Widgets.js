import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./Widgets.css";
import Post from "../Feed/Post";

function Widgets({ tweets, isTweetUpdated, newUpdatedTweet }) {
  const [search, setSearch] = useState("");


  const searchHandler = (e) => {
    setSearch(e.target.value);
    // console.log(search);
    // console.log(tweets);
  };

  const showTweets = (item, index) => {
    //console.log(item);
      return (
        <Post
          key={index}
          text={item.tweet}
          displayName={item.userName}
          id={index}
          widget={true}
          tweets = {tweets}
          isTweetUpdated= {isTweetUpdated}
          newUpdatedTweet = {newUpdatedTweet}
        />
      );
  };

  const filteredTweets = (item, index) => {
    if(item.tweet.includes(search)){
      return (
        <Post
          key={index}
          text={item.tweet}
          displayName={item.userName}
          id={index}
          widget={true}
          tweets = {tweets}
          isTweetUpdated= {isTweetUpdated}
          newUpdatedTweet = {newUpdatedTweet}
          feed={false}
        />
      );
    }
  }

  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input
          placeholder="Search Twitter"
          type="text"
          onChange={searchHandler}
        />
      </div>
      <div className="widgets__container">
        <div className="widgets__container__header">
          <h2>Tweets</h2>
        </div>
        <div className="widgets_container_contents">

          {search === "" ? tweets.map(showTweets) : tweets.map(filteredTweets) }

        </div>
      </div>
    </div>
  );
}

export default Widgets;
