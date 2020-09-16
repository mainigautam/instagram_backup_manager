import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import Modal from './Components/Modal';
import './style/gallery.css'
function Media() {
    //API
    const [media , setMedia] = useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async  () => {
        const result= await fetch('/media');
        const data = await result.json();
        setMedia(data);
        setLoading(false);
    }
    useEffect( ()=>{
        fetchData();
    },[]);

    //Modal Implementation:
    const [url , setUrl] = useState('');
    const [show , setShow] = useState(false)
    const closeModal = () => setShow(false);
    // Detailed Hover
    const[hover , setHover] = useState(false);
    console.log(hover);

    

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
                    {/* Nav Heading */}
                    <div className="titleBarInbox">
                        <div className="titleText text-center">
                            Instagram Backup Manager
                        </div>
                    </div>
                
                    {/* Stories Gallery Starts Here */}
                    <div className="storyArea">
                    {media.stories.map((story,i)=>{
                        if(story.path.split('.').pop() === "mp4"){
                            return(
                                    <div className="storyDiv"
                                    key={i} 
                                    onClick={(e)=>{setShow(true);setUrl(story.path)}} 
                                    onMouseEnter={(e)=>{setHover(true)}}
                                    onMouseLeave={(e)=>{setHover(false)}}
                                    >
                                        <div>   
                                            <video controls onClick={(e)=>{e.preventDefault()}}>
                                                <source src={story.path} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                        )
                        }else{
                            return(
                                    <div className="storyDiv" 
                                    key={i} 
                                    onClick={(e)=>{setShow(true);setUrl(story.path)}} 
                                    onMouseEnter={(e)=>{setHover(true)}}
                                    onMouseLeave={(e)=>{setHover(false)}}
                                    >
                                        <img src={story.path} alt={story.caption}  className="storyImage" />
                                        
                                    </div>
                            )
                        }
                    })}
                    </div>

                    {/* Modal Implement */}
                    <Modal 
                    url={url} 
                    show={show} 
                    close={closeModal}
                    />

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
                        <Link to="/">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-user"></i>
                                <div className="footText">
                                    Profile
                                </div>
                            </div>
                        </Link>
                        <Link to="/media">
                            <div className='footBut'>
                                <i className="fas fa-2x fa-photo-video icon-selected"></i>
                                <div className="footText">
                                    Stories
                                </div>
                            </div>
                        </Link>
                    </div>
                    </>
                )
            }
}

export default Media
