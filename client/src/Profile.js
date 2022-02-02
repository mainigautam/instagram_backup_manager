import React , { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Components/Footer';
import './style/profile.css'
import './style/navigator.css'
import './style/inbox.css'
import './style/messages.css'
import userImage from './Components/user.png'
import instaLogo from './Components/instagram-new.png'
import StatModal from './Components/StatModal';
const Profile = () => {
    const [profile , setProfile] = useState();
    const [media , setMedia] = useState();
    const [followers,setFollowers] = useState();
    const [following,setFollowing] = useState();
    const [loading , setLoading] = useState(true);
    const [show , setShow] = useState(false);
    const [selection, setSelection] = useState('')
    const close =()=> setShow(false);
    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/user'),
            fetch('/content/posts_1.json'),
            fetch('/connections/followers.json'),
            fetch('/connections/following.json')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setProfile(result[0].profile_user[0]);
        setMedia(result[1]);
        setFollowers(result[2].relationships_followers);
        setFollowing(result[3].relationships_following);
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
                    <img src={instaLogo} alt="" className="lazyLoader"/>
                </div>
            </>
    )}else{
    return (
    <>
        <div className="titleBarInbox" style={{border: "none"}}>
            <form action="http://localhost:8081/delete" method="post">
                <button type="submit" className="trash">
                    <i className="fas fa-2x fa-trash-alt"></i>   
                </button>
            </form>
            <div className="titleText text-center">
                Instagram Backup Manager
                <span onClick={(e)=>{alert("Instagram Backup Data Viewer by Gautam Maini")}}>
                    <i className="fas fa-2x fa-info-circle info"></i>
                </span>
            </div>
        </div>

        {/* Header Section Begins Here */}
        <div className='header'>
            {profile.media_map_data['Profile Photo'] === undefined||
            profile.media_map_data['Profile Photo'].uri === undefined
            ? <img src={userImage} alt="" className='profilePhoto' />
            : <img src={profile.media_map_data['Profile Photo'].uri} alt="" className='profilePhoto' />

            }
            <div className='statsHolder'>
                <div className='userName'>
                            {profile.string_map_data.Username.value}
                </div>
                <div className="stats">
                    {<b>
                        {media.undefined === true ? 0 : media.length}
                    </b>} posts&nbsp; 
                    {<b> 
                        {followers !== undefined ? followers.length: 0 }&nbsp; 
                    </b>}
                    { followers !== undefined ?
                        <span className="statClick" onClick={(e)=>{setSelection('followers');setShow(true)}}>
                            followers&nbsp;
                        </span> :
                        <span className="statClick" >
                            followers&nbsp;
                        </span>
                    }
                    {<b> 
                        {following !== undefined ? following.length: 0 }&nbsp; 
                    </b>} 
                    { following !== undefined ?
                        <span className="statClick" onClick={(e)=>{setSelection('following');setShow(true)}}>
                            following&nbsp;
                        </span> :
                        <span className="statClick" >
                            following&nbsp;
                        </span>
                    }
                </div>
                <StatModal followers={followers} following={following} shw={show} selection={selection} close={close}/>
                <div className='fullName'>
                    {decodeURIComponent(escape(profile.string_map_data.Name === undefined? " ":profile.string_map_data.Name.value))}
                </div>
                <div className="bio">
                   {decodeURIComponent(escape(profile.string_map_data.Bio===undefined?" ":profile.string_map_data.Bio.value))}
                </div>
            </div>
            <div className="bio-alt">
                {decodeURIComponent(escape(profile.string_map_data.Bio===undefined?" ":profile.string_map_data.Bio.value))}
                </div>
        </div>
        <hr/>
        {/* Header Section Ends Here */}

        {/* Posts Section Starts Here */}
        {media.undefined ===true?
            <div className="noPost">
                No Posts Were Uploaded By You At The Time This Backup Was Generated!
            </div>
        :
        <div className="postArea">
        {media.map((post,i)=>{
            return(
                <Link to={`/photo/${i}`} key={i}> 
                    <div className={`postDiv ${post.media.length>1?"album-indicator":" "}`} >
                        <img src={post.media[0].uri} alt={post.title}  className="postImage" />
                    </div>
                </Link>
           )
        })}
        </div>} 
        {/* Posts Section Ends Here */}

        {/*Footer Starts Here  */}
        <Footer profile={true}/>
    </>
    )
  }
}

export default Profile
