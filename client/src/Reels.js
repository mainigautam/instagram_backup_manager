import React , {useState,useEffect} from 'react'
import Footer from './Components/Footer';
import instaLogo from './Components/instagram-new.png'
import Modal2 from './Components/Modal2'
const Reels = () => {
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
    const [url , setUrl] = useState('');
    const [show , setShow] = useState(false);
    const [caption , setCaption] = useState('');
    const [date , setDate] = useState('')
    const closeModal = () => setShow(false);
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
                {media.videos !== undefined?
                    <div className="storyArea">
                        {media.videos.map((reel,i)=>{
                        return(
                        <div className="storyDiv" key={i} onClick={(e)=>{
                            setShow(true);
                            setUrl(reel.path);
                            setCaption(reel.caption);
                            setDate(reel.taken_at);
                            }} >
                            <div className="video-indicator">   
                                <video onClick={(e)=>{e.preventDefault()}}>
                                    <source src={reel.path} type="video/mp4"/>
                                </video>
                            </div>
                        </div>
                        )})}
                    </div>:
                    <div className="storyArea noPost">
                        No Reels Were Uploaded At The Time This Backup Was Created
                    </div>
                    }
                <Modal2 
                    url={url} 
                    show={show} 
                    close={closeModal}
                    caption={caption}
                    date={date}
                    />
                {/* Footer Begin */}
                <Footer reels={true}/>
            </>
            )
        }
    
                
}

export default Reels
