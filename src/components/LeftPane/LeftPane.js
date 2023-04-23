import React from "react";
import "./leftPane.css";
import MarkUnreadChatAltIcon from "@mui/icons-material/MarkUnreadChatAlt";
import GroupIcon from "@mui/icons-material/Group";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import FlagIcon from "@mui/icons-material/Flag";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BuildIcon from "@mui/icons-material/Build";
import SportsIcon from "@mui/icons-material/Sports";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

export default function LeftPane() {
  return (
    <div className="leftPaneBox">
      <div className="leftPaneContainer">
        <div className="leftPaneManu">
          <li className="leftPaneMenyItem">
            <MarkUnreadChatAltIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Message</span>
          </li>

          <li className="leftPaneMenyItem">
            <GroupIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Groups</span>
          </li>

          <li className="leftPaneMenyItem">
            <RssFeedIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Feed</span>
          </li>

          <li className="leftPaneMenyItem">
            <FlagIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Pages</span>
          </li>

          <li className="leftPaneMenyItem">
            <CalendarMonthIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Ivents</span>
          </li>

          <li className="leftPaneMenyItem">
            <BuildIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Setting</span>
          </li>

          <li className="leftPaneMenyItem">
            <SportsIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Games</span>
          </li>

          <li className="leftPaneMenyItem">
            <NewspaperIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">News</span>
          </li>

          <li className="leftPaneMenyItem">
            <WorkOutlineIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Jobs</span>
          </li>

          <li className="leftPaneMenyItem">
            <AddShoppingCartIcon className="leftPaneMenuIcon" />
            <span className="lestPaneMenuText">Market</span>
          </li>
          <hr/>
          <div className="pagesYouLike">
            <h3>Pages You Like</h3>
          </div>

          <li className="pageListItem">
            <img src="/images/profile.jpg" alt="" className="pagePic" />
            <span className="PageName">Code with Supun</span>
          </li>

          <li className="pageListItem">
            <img src="/images/profile.jpg" alt="" className="pagePic" />
            <span className="PageName">Code with Supun</span>
          </li>

          <li className="pageListItem">
            <img src="/images/profile.jpg" alt="" className="pagePic" />
            <span className="PageName">Code with Supun</span>
          </li>

          <li className="pageListItem">
            <img src="/images/profile.jpg" alt="" className="pagePic" />
            <span className="PageName">Code with Supun</span>
          </li>

        </div>
      </div>
    </div>
  );
}
