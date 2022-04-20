import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import axios from "axios";
function Feed({ setDatas, setIsTweetUpdated, setNewUpdatedTweet }) {
  const [tweets, setTweets] = useState([]);

  // const [status, setStatus] = useState(true);

  // const datas = [
  //   {
  //     id: 1,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "tanmay",
  //     date: "05/01/2021",
  //   },
  //   {
  //     id: 2,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "mridul",
  //     date: "04/06/2021",
  //   },
  //   {
  //     id: 3,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "Prakhar",
  //     date: "06/01/2021",
  //   },
  //   {
  //     id: 4,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "Nikhil",
  //     date: "02/01/2022",
  //   },
  //   {
  //     id: 5,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "Rameshwar",
  //     date: "02/02/2021",
  //   },
  //   {
  //     id: 6,
  //     tweet:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  //     userName: "Shasank",
  //     date: "03/09/2022",
  //   },
  // ];

  const onDelete = (id) => {
    setTweets((prev) => {
      return prev.filter((item, index) => {
        return index !== id;
      });
    });
  };

  const onUpdate = (id, updatedTweet) => {
    let upDatedData = tweets;
    setIsTweetUpdated(true);
    setNewUpdatedTweet(updatedTweet);

    upDatedData[id].tweet = updatedTweet;
    setTweets(upDatedData);
  };

  useEffect(() => {
    // setStatus(true);
    axios
      .get(`https://tweets.free.beeceptor.com/tweets/all`)
      .then((res) => {
        // console.log(res.data);

        res.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date);
        });
    res.data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date);
    });
    
    setTweets(res.data);

      // console.log("rendered");
      // setStatus(false);
    })
    .catch((err) => {
      console.log(err);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setDatas(tweets);
    // eslint-disable-next-line
  }, [tweets]);

  const tweetMap = (tweet, index) => {
    return (
      <Post
        key={index}
        text={tweet.tweet}
        displayName={tweet.userName}
        id={index}
        onDelete={onDelete}
        onUpdate={onUpdate}
        tweets={tweets}
        feed={true}
        widget={false}
      />
    );
  };

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      <TweetBox posts={setTweets} tweets={tweets} />
      {tweets.map(tweetMap)}
    </div>
  );
}

export default Feed;
