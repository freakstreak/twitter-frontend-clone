import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import TagOutlinedIcon from "@mui/icons-material/TagOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import SidebarOption from "./SidebarOption";
import LogoutIcon from '@mui/icons-material/Logout';

import Button from "@mui/material/Button";

function Sidebar({ setIsUserLoggedIn, setProfileClicked, profileClicked }) {
  //this section is for logout purpose
  const handleLogOut = () => {
    setIsUserLoggedIn(false);
  };

  //this section handles profile click
  const profileClickHandler = () => {
    setProfileClicked(true)
    // console.log("profile is clicked");
  };

  //this section handles home click
  const homeClickHandler = () => {
    setProfileClicked(false)
  }

  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />
      <div onClick={homeClickHandler}>
        <SidebarOption active={!profileClicked} Icon={HomeOutlinedIcon} text="Home" />
      </div>
      <SidebarOption Icon={TagOutlinedIcon} text="Explore" />
      <SidebarOption
        Icon={NotificationsNoneOutlinedIcon}
        text="Notifications"
      />
      <SidebarOption Icon={MailOutlineOutlinedIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderOutlinedIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltOutlinedIcon} text="Lists" />
      <div onClick={profileClickHandler}>
        <SidebarOption active={profileClicked} Icon={PermIdentityOutlinedIcon} text="Profile" />
      </div>

      <SidebarOption Icon={MoreHorizIcon} text="More" />
      <Button
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
        onClick={handleLogOut}
      >
        Log Out
      </Button>
      <Button
        variant="outlined"
        className="logout"
        
        onClick={handleLogOut}
      >
        <LogoutIcon/>
      </Button>
    </div>
  );
}

export default Sidebar;
