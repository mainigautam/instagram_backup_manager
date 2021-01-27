import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import Footer from "./Components/Footer";

const Direct2 = () => {
  //Fetch Data
  const [loading, setLoading] = useState(true);
  const [recipients, setRecipients] = useState();
  const fetchData = async () => {
    const result = await Promise.all([
      fetch("/recipients")
    ]).then(function (responses) {
      return Promise.all(
        responses.map(function (response) {
          return response.json();
        })
      );
    });
    setRecipients(result[0]);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <>
        <div className="coverScreen">
          <img
            src="https://img.icons8.com/nolan/50/instagram-new.png"
            alt=""
            className="lazyLoader"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="black">
          <div className="titleBarInbox">
            <div className="titleText text-center">
              Instagram Backup Manager
                <span onClick={(e)=>{
                    alert("This Inbox is Alphabetically Ordered and not according to time as it is only order Instagram provides and Names displayed are Real/Full Names not usernames")
                    }}>
                    <i className="fas fa-2x fa-info-circle info"></i>
                </span>
            </div>  
          </div>
        </div>
        <div>
          {recipients.map((info, i) => {
            return (
              <Link to={"direct/" + info} key={i}>
                <div className="inbox">
                  <div className="profileCircle">
                    <div className="subCircle">
                      <div className="profileInitials">
                        {info[0].length === 1 ? (info[0]) : (<i className="fas fa-users"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="friendName">{info.split("_")[0].length <= 3 ? info : info.split("_")[0]}</div>
                </div>
              </Link>
            );
          })}
        </div>
        {/*Footer Starts Here  */}
        <Footer />
      </>
    );
  }
};

export default Direct2;
