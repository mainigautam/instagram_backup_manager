import React from "react";
import instaOrig from '../Components/insta-orig.png'
import stepsImage from '../Components/Oops.png'
const Oops = () => {
  return (
    <>
    <div className="headNav">
        <img src={instaOrig} alt="" className='navLogo'/>   
        <form action="http://localhost:8081/delete" method="post" style={{margin:'auto'}} >
            <button type="submit" className="trash" title="Delete The Extracted Backup">
                <i className="fas fa-2x fa-trash-alt"></i>   
            </button>
        </form>
    </div>
      <div className="notCompact">
        <div className="notCom">
          Oops!
          Backup Format Incorrect!
        </div>
        <div className="subNotCom">
          This is a HTML format backup, IGBM Works with JSON formatted Instagram Backups.Click  <a href="http://localhost:8081/uncompactible/home" className="homeLink">
            Here
          </a> to Access this version 
          Or Press trash icon (<i className="fas fa-1x fa-trash-alt"></i>), Download JSON Format Backup and Try Again! , Following are steps for same
        </div>
        <img src={stepsImage} alt="Steps for Downloading JSON Backup" className="comImage"/>
      </div>
    </>
  );
};

export default Oops;
