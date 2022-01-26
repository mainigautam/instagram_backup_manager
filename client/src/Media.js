import React , {useState,useEffect} from 'react'
import Modal from './Components/Modal';
import './style/gallery.css'
import Footer from './Components/Footer';
import instaLogo from './Components/instagram-new.png'


function Media() {
    //API
    const [media , setMedia] = useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async  () => {
        const result= await fetch('/content/stories.json');
        const data = await result.json();
        setMedia(data.ig_stories);
        setLoading(false);
    }
    useEffect( ()=>{
        fetchData();
    },[]);

    //Modal Implementation:
    const [url , setUrl] = useState('');
    const [show , setShow] = useState(false);
    const closeModal = () => setShow(false);
    // Detailed Hover
    // const[hover , setHover] = useState(false);

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
                        </div>
                    </div>
                
                    {/* Stories Gallery Starts Here */}
                    {media !== undefined ?
                    <div className="storyArea">
                    {media.map((story,i)=>{
                        if(story.uri.split('.').pop() === "mp4"){
                            return(
                                    <div className="storyDiv"
                                    key={i} 
                                    onClick={(e)=>{setShow(true);setUrl(story.uri)}} 
                                    // onMouseEnter={(e)=>{setHover(true)}}
                                    // onMouseLeave={(e)=>{setHover(false)}}
                                    >
                                        <div className="video-indicator">   
                                            <video onClick={(e)=>{e.preventDefault()}}>
                                                <source src={story.uri} type="video/mp4"/>
                                            </video>
                                        </div>
                                    </div>
                        )
                        }else{
                            return(
                                    <div className="storyDiv" 
                                    key={i} 
                                    onClick={(e)=>{setShow(true);setUrl(story.uri)}} 
                                    // onMouseEnter={(e)=>{setHover(true)}}
                                    // onMouseLeave={(e)=>{setHover(false)}}
                                    >
                                        <img src={story.uri} alt={story.title}  className="storyImage" />
                                        
                                    </div>
                            )
                        }
                    })}
                    </div> :
                    <div className="storyArea noPost">
                        No Stories Were Uploaded At The Time This Backup Was Created
                    </div>
                    }

                    {/* Modal Implement */}
                    <Modal 
                    url={url} 
                    show={show} 
                    close={closeModal}
                    />

                    {/*Footer Starts Here  */}
                    <Footer media={true}/>
                    </>
                )
            }
}

export default Media
