import React from "react";
import "./style/upload.css";
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
        <img src="https://img.icons8.com/nolan/300/instagram-new.png" alt=""/>
          <form action="/upload" method="post" encType="multipart/form-data">
            <label for="Upload" className="uploadLabel">
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