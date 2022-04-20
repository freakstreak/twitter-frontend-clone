import React, { useEffect, useState } from "react";
import "./Profile.css";
import axios from "axios";
import EmailIcon from '@mui/icons-material/Email';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import PublicIcon from '@mui/icons-material/Public';

function Profile() {
  const [profileDetails, setProfileDetails] = useState({});
  const [status, setStatus] = useState(true);
  useEffect(() => {
    
    setStatus(true)
    axios
      .get(`https://tweets.free.beeceptor.com/profile`)
      .then((res) => {
        setStatus(false)
        setProfileDetails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (status) {
    return (
      <div className="profile">
        <div className="feed__header">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }
  return (
    <div className="profile">
      <div className="feed__header">
        <h2>Welcome {profileDetails.first_name}</h2>
      </div>
      <img src="https://picsum.photos/500/200/?blur" alt="" />
      <div className="profileDetails">
      <h3>{profileDetails.first_name + " " + profileDetails.last_name} </h3>
      <h4><EmailIcon/>{profileDetails.email}</h4>
      <h4>{profileDetails.gender === "Female" ? <FemaleIcon/> : <MaleIcon/>}{profileDetails.gender}</h4>
      <h4><PublicIcon/>{profileDetails.country}</h4>
      </div>
    </div>
  );
}

export default Profile;
