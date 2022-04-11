import React, { useState, useEffect } from "react";
import instaLogo from './Components/instagram-new.png'
import Header from "./Components/Header";
import Messages2 from './Components/Messages2'
const Direct2 = () => {
  //Fetch Data
  const [loading, setLoading] = useState(true);
  const [recipients, setRecipients] = useState();
  const [id , setInfo] = useState(null);
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
            src={instaLogo}
            alt=""
            className="lazyLoader"
          />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Header direct={true} />
        <div className="masterInboxContainer">
          <div className="masterInbox">
        {typeof(recipients) !== "object" ? 
          <div>
            <div className="noPost">
                {recipients}
            </div>
          </div> :
        <div>
          {recipients.map((info, i) => {
            return (
                <div className="inbox" onClick={()=>{setInfo(info)}} key={i}>
                  <div className="profileCircle">
                    <div className="subCircle">
                      <div className="profileInitials">
                        {info[0].length === 1 ? (info[0]) : (<i className="fas fa-users"></i>)}
                      </div>
                    </div>
                  </div>
                  <div className="friendName">{info.split("_")[0].length <= 3 ? info : info.split("_")[0]}</div>
                </div>
            );
          })}
        </div>
        }
        </div>
        {id===null? 
        <div className="directExtension">
        <i className="fas fa-6x fa-paper-plane"></i>  <br/>
        Select a user from left to See Conversations
        </div>
        :<Messages2 id={id}/>}
        </div>
      </>
    );
  }
};

export default Direct2;
