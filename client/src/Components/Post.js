import React , {useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import '../style/post.css';
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
    useEffect( ()=>{
        fetchData();
    },[]);

/////////////////////////////////////////////////////////////////////////
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
                                <div className="postCaption">
                                    {media.photos[id].caption}
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
                    <div className='footNav footText'>
                    <Link to="/timeline">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-clock"></i>
                                <div className="footText">
                                    Timeline
                                </div>
                            </div>
                        </Link>
                        <Link to="/direct">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-paper-plane"></i>
                                <div className="footText">
                                    Direct
                                </div>
                            </div>
                        </Link>
                        <Link to="/profile">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-user icon-selected"></i>
                                <div className="footText">
                                    Profile
                                </div>
                            </div>
                        </Link>
                        <Link to="/media">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-photo-video"></i>
                                <div className="footText">
                                    Media
                                </div>
                            </div>
                        </Link>
                    </div>
                </>
            )
    }
}
export default Post
