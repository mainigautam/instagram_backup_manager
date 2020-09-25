import React , { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Components/Footer';
import './style/profile.css'
import './style/navigator.css'
import './style/inbox.css'
import './style/messages.css'
import StatModal from './Components/StatModal';
const Profile = () => {

    //API DataSet
    const [profile , setProfile] = useState();
    const [media , setMedia] = useState();
    const [connections , setConnections] = useState();
    const [loading , setLoading] = useState(true);
    const [show , setShow] = useState(false);
    const [selection, setSelection] = useState('')
    const close =()=> setShow(false);
    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/profile'),
            fetch('/connections'),
            fetch('/media')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setProfile(result[0]);
        setMedia(result[2]);
        setConnections(result[1]);
        setLoading(false)
    }
    useEffect( ()=>{
        fetchData();
    },[]);
    
    
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// 
if(loading){
    return(
            <>
                <div className="coverScreen">
                    <img src="https://img.icons8.com/nolan/50/instagram-new.png" alt="" className="lazyLoader"/>
                </div>
            </>
    )}else{
    return (
    <>
        <div className="titleBarInbox" style={{border: "none"}}>
            <div className="titleText text-center">
                Instagram Backup Manager
            </div>
        </div>

        {/* Header Section Begins Here */}
        <div className='header'>
            <img src={media.profile[0].path} alt="" className='profilePhoto' />
            <div className='statsHolder'>
                <div className='userName'>
                            {profile.username}
                </div>
                <div className="stats">
                    {<b>
                        {media.photos === undefined ? 0 : media.photos.length}
                    </b>} posts&nbsp; 
                    {<b> 
                        {connections.hasOwnProperty("followers") ? Object.keys(connections.followers).length: 0 }&nbsp; 
                    </b>}
                    { connections.hasOwnProperty("followers") ?
                        <span className="statClick" onClick={(e)=>{setSelection('followers');setShow(true)}}>
                            followers&nbsp;
                        </span> :
                        <span className="statClick" >
                            followers&nbsp;
                        </span>
                    }
                    {<b> 
                        {connections.hasOwnProperty("following") ? Object.keys(connections.following).length: 0 }&nbsp; 
                    </b>} 
                    { connections.hasOwnProperty("following") ?
                        <span className="statClick" onClick={(e)=>{setSelection('following');setShow(true)}}>
                            following&nbsp;
                        </span> :
                        <span className="statClick" >
                            following&nbsp;
                        </span>
                    }
                </div>
                <StatModal connections={connections} shw={show} selection={selection} close={close}/>
                <div className='fullName'>
                    {profile.name}
                </div>
                <div className="bio">
                    {profile.biography}
                </div>
            </div>
            <div className="bio-alt">
                    {profile.biography}
                </div>
        </div>
        <hr/>
        {/* Header Section Ends Here */}

        {/* Posts Section Starts Here */}
        {media.photos === undefined?
            <div className="noPost">
                No Posts Were Uploaded By You At The Time This Backup Was Generated!
            </div>
        :
        <div className="postArea">
        {media.photos.map((post,i)=>{
            return(
                <Link to={`/photo/${i}`} key={i}> 
                    <div className="postDiv" >
                        <img src={post.path} alt={post.caption}  className="postImage" />
                    </div>
                </Link>
           )
        })}
        </div>} 
        {/* Posts Section Ends Here */}

        {/*Footer Starts Here  */}
        <Footer />
    </>
    )
  }
}

export default Profile
