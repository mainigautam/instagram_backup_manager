import React , {useState,useEffect} from 'react'
import instaLogo from './Components/instagram-new.png'
import Modal2 from './Components/Modal2'
const Reels = () => {
    const [media , setMedia] = useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async  () => {
        const result= await fetch('/content/reels.json');
        const data = await result.json();
        setMedia(data.ig_reels_media);
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
                {media !== undefined?
                    <div className="storyArea">
                        {media.map((reel,i)=>{
                        return(
                        <div className="storyDiv" key={i} onClick={(e)=>{
                            setShow(true);
                            setUrl(reel.media[0].uri);
                            setCaption(reel.media[0].title);
                            setDate(reel.media[0].creation_timestamp);
                            }} >
                            <div className="video-indicator">   
                                <video onClick={(e)=>{e.preventDefault()}}>
                                    <source src={reel.media[0].uri} type="video/mp4"/>
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
            </>
            )
        }
    
                
}

export default Reels
