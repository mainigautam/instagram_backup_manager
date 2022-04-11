import React , {useState,useEffect} from 'react'
import '../style/gallery.css'
import instaLogo from './instagram-new.png'
import MiniModal from './MiniModal';

function MediaBrowser({id}) {
    //API
    const [media,setMedia]=useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async  () => {
        const result= await Promise.all([
            fetch(`/direct-media-photos/${id}`),
            fetch(`/direct-media-videos/${id}`),
        ])
        .then((responses) => {
            return Promise.all(responses.map((response) => {
                return response.json();
        }));})
        setMedia([result[0],result[1]])
        setLoading(false);
    }
    useEffect( ()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    const [url , setUrl] = useState('');
    const [show , setShow] = useState(false);
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
                    {/* Stories Gallery Starts Here */}
                            <div className="mediaBrowserDiv">
                            <div className='mediaTitle'>Photos</div>
                            {typeof(media[0])==='string'?
                            <center>{media[0]}</center>
                            :
                            media[0].map((mediaItem,i)=>{
                                    return(
                                        <img src={`/messages/inbox/${id}/photos/${mediaItem}`} alt={mediaItem}  className="mediaBrowserItem" key={i} onClick={()=>{setShow(true);setUrl(`/messages/inbox/${id}/photos/${mediaItem}`)}}/>
                                    )
                                    })}
                            </div>
                            <div className="mediaBrowserDiv">
                            <div className='mediaTitle'>Videos</div>
                            {typeof(media[1])==='string'?
                            <center>{media[1]}</center>
                            :media[1].map((mediaItem,i)=>{
                                    return(
                                        <div className="video-indicator mediaBrowserItem" key={i} onClick={()=>{setShow(true);setUrl(`/messages/inbox/${id}/videos/${mediaItem}`)}}>   
                                            <video onClick={(e)=>{e.preventDefault()}} >
                                                    <source src={`/messages/inbox/${id}/videos/${mediaItem}`} type="video/mp4"/>
                                            </video>
                                        </div>
                                )
                            })}
                            </div>
                            <MiniModal 
                            url={url} 
                            show={show} 
                            close={closeModal}
                            />
                    </>
                )
            }
}

export default MediaBrowser
