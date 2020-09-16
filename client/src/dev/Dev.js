import React , {useState , useEffect} from 'react'
import './dev.css'
function Dev() {
    const [messages , setMessages] = useState([]);
    const [media , setMedia] = useState([]);
    const [loading , setLoading] = useState(true);
    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/messages'),
            fetch('/media')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setMessages(result[0]);
        setMedia(result[1]);
        setLoading(false);
    }
    useEffect( ()=>{
        fetchData();
    },[]);
        

if(loading){
        return (
            <>
                <div>
                    Loading........
                </div>
            </>
    )
}else{
    return(
        <>
        {
            messages[0].conversation.map((e)=>{
                if(e.media !==undefined){
                    for(var i=0 ; i<media.direct.length ; i++){
                        if(media.direct[i].taken_at===e.created_at){
                            return (
                                <div className='convoAreaS' key={i}>
                                    <div className="tooltipS">
                                        <div className="tooltiptextS">
                                            {new Date(e.created_at).toDateString()}<br/>
                                            {new Date(e.created_at).toLocaleTimeString()}
                                        </div>
                                        <div className="messageSent">
                                            {<img src={media.direct[i].path} alt=""/>}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }
                    }
                }})
        }
        </>
    )}
}

export default Dev
