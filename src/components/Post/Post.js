import React from 'react'
import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <div className="postContainer">
            <div className="postTop">
                <img src="/Images/Supun.jpg" alt="" className="postImage" />
                <span className="postUserName">Supun Sandamal</span>
                <span className="postTime">5 mins ago</span>
            </div>
            <div className="postCenter">
                <div className="postCaption">
                    hey..! Skill is power..! 
                </div>
                <img src="/Images/Supun.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    
                </div>
            </div>
        </div>
    </div>
  )
}
