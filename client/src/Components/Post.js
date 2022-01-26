import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import instaLogo from "./instagram-new.png";
import "../style/post.css";
import Footer from "./Footer";
const Post = ({ match }) => {
  const {
    params: { id },
  } = match; //Index Id

  //API Call
  const [media, setMedia] = useState([]);
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    const result = await Promise.all([
      fetch("/user"),
      fetch("/content/posts_1.json"),
    ]).then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    });
    setMedia(result[1]);
    setProfile(result[0].profile_user[0]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const [expanded, expand] = useState(false);
  const albumLength = `${loading ? 0 : media[id].media.length}`;
  const [photoNumber,setPhotoNumber] = useState(0);
  const changePlus=()=>{
    if(photoNumber<albumLength-1){
        setPhotoNumber(photoNumber+1);
    }else{
        setPhotoNumber(photoNumber);
    }
  }
  const changeMinus=()=>{
    if(photoNumber>0){
        setPhotoNumber(photoNumber-1);
    }else{
        setPhotoNumber(photoNumber);
    }
  }
  /////////////////////////////////////////////////////////////////////////
  if (loading) {
    return (
      <>
        <div className="coverScreen">
          <img src={instaLogo} alt="" className="lazyLoader" />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="titleBarInbox">
          <div className="backNav">
            <Link to="/profile">
              <i className="fas fa-2x fa-chevron-left white"></i>
            </Link>
          </div>
          <div className="titleText text-center">Instagram Backup Manager</div>
        </div>

        {/* Post Load */}
        <div className="postControls">
          <div className={`movementButton ${photoNumber>0 ? "" : "hide"}`} onClick={changeMinus}>
            <i className="fas fa-chevron-left"></i>
          </div>
          <div className="post">
            <div className="postZoomSection">
              <div className="postHeader">
                <div className="profileInitials">
                  <img
                    src={profile.media_map_data["Profile Photo"].uri}
                    alt="Profile Pic"
                    className="profilePicInitials"
                  />
                </div>
                <div className="postUser">
                  {profile.string_map_data.Username.value}
                </div>
                {/* <div className="postLocation">
                                        {media[id].location}
                                    </div> */}
              </div>
              <div className="postPicHolder">
                <img
                  src={media[id].media[photoNumber].uri}
                  alt={media[id].media[0].title}
                  className="postPic"
                />
              </div>
              <div className="postFooter">
                <div className="postCaptionHolder">
                  <div className={expanded ? "postCaptionExp" : "postCaption"}>
                    <b>{profile.string_map_data.Username.value}:</b>
                    {decodeURIComponent(
                      escape(
                        albumLength > 1
                          ? media[id].title
                          : media[id].media[0].title
                      )
                    )}
                    <div
                      className={
                        expanded ? "captionExpandHidden" : "captionExpand"
                      }
                      onClick={(e) => {
                        expand(true);
                      }}
                    >
                      <b>more</b>
                    </div>
                  </div>
                </div>
                <div className="sticker">
                  <div className="postDate">
                    {new Date(media[id].media[0].creation_timestamp*1000)
                      .toDateString()
                      .toString()
                      .toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`movementButton ${photoNumber<albumLength-1 ? "" : "hide"}`} onClick={changePlus}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        {/*Footer Starts Here  */}
        <Footer profile={true} />
      </>
    );
  }
};
export default Post;
