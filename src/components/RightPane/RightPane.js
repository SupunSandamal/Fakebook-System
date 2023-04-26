import React from "react";
import "./rightPane.css";

export default function RightPane() {
  return (
    <div className="rightPaneBox">
      <div className="rightPaneContainer">
        <div className="adContainer">
          <span className="sponsered">Sponsored</span>
          <img src="/Images/add.jpg" alt="" className="adImage" />
        </div>
      </div>
    </div>
  );
}
