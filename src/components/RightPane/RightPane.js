import React from "react";
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsored</span>
          <img src="/Images/add.jpg" alt="" className="adImage" />
          <span className="adText">Big sell delivery service We can deliver into your All products</span>
        </div>
        <div className="dirthdayContainer">
          <img src="Images/birthday.png" alt="" className="birthdayImage" />
          <span className="bithdayText"><b>Pasindu liyanage</b> and <b>2 others</b> Having birthday today....!</span>
        </div>
        <div className="friendList">
          <li className="onlineFriend">
            <div className="onlineFriendImageContainer">
              <img src="/Images/friend.jpeg" alt="" className="onlineFriendImg" />
              <span className="onlineStatus"></span>
            </div>
            <span className="onlineFriendName">Shaloni Leao</span>
          </li>
        </div>
      </div>
    </div>
  );
}
