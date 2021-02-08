import React , {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import instaLogo from './instagram-new.png'
import '../style/post.css';
import Footer from './Footer'
const Post = ({match}) => {
    const {params : { id } } = match; //Index Id

    //API Call
    const [media , setMedia] = useState([]);
    const [profile , setProfile] = useState();
    const [loading , setLoading] = useState(true)
    const fetchData = async  () => {
        const result= await Promise.all([
            fetch('/profile'),
            fetch('/media')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setMedia(result[1]);
        setProfile(result[0]);
        setLoading(false);
    }
    useEffect(()=>{
        fetchData();
    },[]);
    const [expanded,expand] = useState(false)
/////////////////////////////////////////////////////////////////////////
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
                    <div className="titleBarInbox">
                        <div className='backNav'>
                            <Link to='/profile'>
                                <i className="fas fa-2x fa-chevron-left white"></i>
                            </Link>
                        </div>
                        <div className="titleText text-center">
                            Instagram Backup Manager
                        </div>
                    </div>

                    {/* Post Load */}
                    <div className="post">
                        <div className="postZoomSection">
                            <div className="postHeader">
                                <div className="profileInitials">
                                    <img src={media.profile[0].path} alt="Profile Pic" className="profilePicInitials"/>
                                </div>
                                <div className="postUser">
                                    {profile.username}
                                </div>
                                <div className="postLocation">
                                    {media.photos[id].location}
                                </div>
                            </div>
                            <div className="postPicHolder">
                                <img src={media.photos[id].path} alt={media.photos[id].caption} className="postPic" />
                            </div>
                            <div className="postFooter">    
                                <div className="postCaptionHolder">
                                    <div className={expanded ? "postCaptionExp" : "postCaption"}>
                                        <b>{profile.username}:</b>
                                        {media.photos[id].caption}
                                        <div className={expanded? "captionExpandHidden" :"captionExpand"} onClick={(e)=>{expand(true)}}><b>more</b></div>
                                    </div>
                                </div>
                                <div className="sticker">
                                    <div className="postDate">
                                        {new Date(media.photos[id].taken_at).toDateString().toString().toUpperCase()}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/*Footer Starts Here  */}
                    <Footer profile={true}/>
                </>
            )
    }
}
export default Post
