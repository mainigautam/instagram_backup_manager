import React from 'react'
import Footer from './Components/Footer';
import instaLogo from './Components/instagram-new.png'
const Reels = () => {
    var loading = false;
    if(loading){
        return(
                <>
                    <div className="coverScreen">
                    <img src={instaLogo} alt="" className="lazyLoader"/>
                    </div>
                </>
        )}else{
            return (
                <>
                {/* Nav Heading */}
                <div className="titleBarInbox">
                    <div className="titleText text-center">
                        Instagram Backup Manager
                        <span onClick={(e)=>{
                    alert("Comming Soon")
                    }}>
                    <i className="fas fa-2x fa-info-circle info"></i>
                </span>
                    </div>
                </div>
                <div>
                    This Feature is Comming Soon
                </div>
                {/* Footer Begin */}
                <Footer/>
                </>
            )
        }
                
}

export default Reels
