import React from "react";
import "./addPost.css";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import LiveTvIcon from "@mui/icons-material/LiveTv";

export default function AddPost() {
  return (
    <div className="addPost">
      <div className="addPostContainer">
        <div className="addPostTop">
          <img src="/Images/profile.jpg" alt="" className="addPostPic" />
          <input placeholder="What in your mind...?" type="text" className="addPostInput"/>
        </div>
        <hr className="postHr" />
        <div className="addPostbottom">
          <div className="addPostOptions">
            <div className="addPostOption">
              <InsertPhotoIcon htmlColor="orange" className="addPhoto" />
              <span className="addPostOptioniconTex">Add Photo/Video</span>
            </div>

            <div className="addPostOption">
              <AddLocationAltIcon htmlColor="red" className="addPhoto" />
              <span className="addPostOptioniconTex">Add Location</span>
            </div>

            <div className="addPostOption">
              <LocalOfferIcon htmlColor="blue" className="addPhoto" />
              <span className="addPostOptioniconTex">Add Tags</span>
            </div>

            <div className="addPostOption">
              <LiveTvIcon htmlColor="tomato" className="addPhoto" />
              <span className="addPostOptioniconTex">Go Live</span>
            </div>
          </div>
          <button className="PostButton">Post</button>
        </div>
      </div>
    </div>
  );
}
