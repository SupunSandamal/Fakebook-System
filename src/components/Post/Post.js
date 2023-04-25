import React from "react";
import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <div className="postContainer">
        <div className="postTop">
         <div className="postTopLeft">
         <img src="/Images/Supun.jpg" alt="" className="postImage" />
          <span className="postUserName">Supun Sandamal</span>
          <span className="postTime">5 mins ago</span>
         </div>
        </div>
        <div className="postCenter">
          <div className="postCaption">hey..! Skill is power..!</div>
          <img src="/Images/Supun.jpg" alt="" className="postedImage" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img src="/Images/like.png" alt="" className="redctionPic" />
            <img src="/Images/ha ha.png" alt="" className="redctionPic" />
            <img src="/Images/Heart.png" alt="" className="redctionPic" />
            <img src="/Images/angry.png" alt="" className="redctionPic" />
            <img src="/Images/sad.png" alt="" className="redctionPic" />
            <span className="likeCount">Kasun and 255 other</span>
          </div>
          <div className="postBottomRight">
            <span className="commentCount">15 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
