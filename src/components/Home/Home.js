import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import Feed from "../Feed/Feed";
import Widgets from "../Widgets/Widgets";
import Profile from "../Profile/Profile";
import "./Home.css";
import { Navigate } from "react-router-dom";
function Home({ isUserLoggedIn, setIsUserLoggedIn }) {
  const [datas, setDatas] = useState([]);
  const [profileClicked, setProfileClicked] = useState(false);

  const [isTweetUpated, setIsTweetUpdated] = useState(false) 
  const [newUpdatedTweet, setNewUpdatedTweet] = useState("")

  useEffect(() => {}, [isUserLoggedIn]);
  
  return (
    <div>
      {isUserLoggedIn ? (
        <div className="home">
          <Sidebar
            profileClicked={profileClicked}
            setProfileClicked={setProfileClicked}
            setIsUserLoggedIn={setIsUserLoggedIn}
          />
          {profileClicked ? <Profile /> : <Feed setDatas={setDatas} setIsTweetUpdated={setIsTweetUpdated} setNewUpdatedTweet={setNewUpdatedTweet}/>}

          <Widgets tweets={datas} isTweetUpated={isTweetUpated} newUpdatedTweet={newUpdatedTweet}/>
        </div>
      ) : (
        <Navigate replace to="/" />
      )}
    </div>
  );
}

export default Home;
