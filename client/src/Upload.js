import React from "react";
import "./style/upload.css";
import instaLogoLarge from './Components/instagram-new-up.png'
const Upload = () => {
  return (
    <>
      {/* Header */}
      <div className="titleBarInbox" style={{ border: "none" }}>
        <div className="titleText text-center">Instagram Backup Manager</div>
      </div>
      {/* Header End */}
      <div className="wrapper">
        <div className="main">
        <img src={instaLogoLarge} alt=""/>
          <form action="/upload" method="post" encType="multipart/form-data">
            <label htmlFor="Upload" className="uploadLabel">
              Please Select The Backup File:
            </label>
            <br />
            <input
              type="file"
              required
              name="Upload"
              className="uploadField"
            ></input>
            <br />
            <button input="submit" className="uploadButton">
              Load Backup!
            </button>
            <br />
            <div className="noteText">
              Note: Instagram Backup is a zip file ,<br /> You should add the
              fresh and un-edited zip here <br />
              otherwise manager won't work
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Upload;
