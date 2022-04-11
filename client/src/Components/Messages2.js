import React , {useState,useEffect} from 'react';
import MediaBrowser from './MediaBrowser';
import instaLogo from './instagram-new.png'
import reelIcon from './reelico.png'
const Messages = ({id}) => {

    //Fetch Data
    const [profile, setProfile] = useState([]);
    const [messages , setMessages] = useState([]);
    const [loading , setLoading] = useState(true)
    const [mediaBrowser,setMediaBrowser] = useState(false)
    
    const directMedia = ()=>{
        mediaBrowser? setMediaBrowser(false): setMediaBrowser(true);
    }
    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/user'),
            fetch(`/messages/${id}`),
        ])
        .then((responses) => {
            return Promise.all(responses.map((response) => {
                return response.json();
        }));})
        setProfile(result[0].profile_user);
        setMessages(result[1]);
        setLoading(false)
    }
    useEffect( ()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[id]);
    if(!loading){
        //The Other Chat Participant
        var username = profile[0].string_map_data.Name === undefined ?profile[0].string_map_data.Username.value:profile[0].string_map_data.Name.value; //Account Owner
        var wout;
        if(messages.participants[0] === decodeURIComponent(escape(username))){
        wout = 1;  
        }else{
        wout = 0;
        }
        var name2 = messages.participants[wout];
        if(name2 === undefined){
            name2= "Instagrammer"
        }
        //Conversation Array
        var mesArr = messages.messages.map((conversation)=>{
        return conversation
        });
    }else{}
//Main Body Render Start//
    if(loading){
        return (
            <>
                <div className="coverScreen">
                    <img src={instaLogo} alt="" className="lazyLoader"/>
                </div>
            </>
        )
    }else{
        return(
                <>
                    {/* Title Bar */}
                    <div className="masterDirect">
                    <div className="masterTitleBar">
                        {mediaBrowser? 
                        <div className='username'>
                            Media Shared in Chat
                        </div>
                        :<>
                        <div className="profilecircle">
                            <div className="profileinitials"> 
                                {name2.name[0].toUpperCase()}
                            </div>   
                        </div> 
                        <div className="username">
                            {decodeURIComponent(escape(name2.name))}
                        </div>
                        </>}
                        <div className='directMedia' onClick={(e)=>{directMedia()}}>
                            {mediaBrowser?<i className="fas fa-2x fa-times-circle"></i>:
                            <i className="fas fa-2x fa-info-circle"></i>}
                        </div>
                    </div>
                    {/* Map The Text Of Sender and Receiver */}
                    {mediaBrowser?<MediaBrowser id={id}/>:
                    <div>
                    {mesArr.reverse().map((chat,i)=>{
                        if(decodeURIComponent(escape(chat.sender_name)) === decodeURIComponent(escape(username))){
                            var dateS = new Date(chat.timestamp_ms);
                                if(chat.photos !== undefined){
                                    return (
                                        <div className='convoAreaS' key={i}>
                                            <div className="tooltipS">
                                                <div className="tooltiptextS">
                                                    {dateS.toDateString()}<br/>
                                                    {dateS.toLocaleTimeString()}
                                                </div>
                                                <div>
                                                    {<img src={chat.photos[0].uri} alt="" className="imageSent"/>}
                                                </div>  
                                            </div>
                                        </div>
                                    )
                            }else if(chat.content===undefined){
                                return (
                                    <div className='convoAreaS' key={i}>
                                        <div className="tooltipS">
                                            <div className="tooltiptextS">
                                                A Reel Was Shared<br/>
                                                {dateS.toDateString()}<br/>
                                                {dateS.toLocaleTimeString()}
                                            </div>
                                            <div className="messageSent">
                                            {<img src={reelIcon} alt=""/>}
                                            </div>  
                                        </div>
                                    </div>
                                )
                            }else{
                                return (
                                    <div className='convoAreaS' key={i}>
                                        <div className="tooltipS">
                                            <div className="tooltiptextS">
                                                You<br/>
                                                {dateS.toDateString()}<br/>
                                                {dateS.toLocaleTimeString()}
                                            </div>
                                            <div className="messageSent">
                                            {decodeURIComponent(escape(chat.content))}
                                            </div>  
                                        </div>
                                    </div>
                                )
                            }
                        }else if(decodeURIComponent(escape(chat.sender_name)) !== decodeURIComponent(escape(username)) && chat.photos !==undefined){
                            var dateRP = new Date(chat.timestamp_ms);
                            return (
                                <div className='convoAreaR' key={i}>
                                    <div className="tooltip">
                                        <div className="tooltiptext">
                                            {dateRP.toDateString()}<br/>
                                            {dateRP.toLocaleTimeString()}
                                        </div>
                                        <div>
                                            {<img src={chat.photos[0].uri} alt="" className="imageSent"/>}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }else if(decodeURIComponent(escape(chat.sender_name)) !== decodeURIComponent(escape(username)) && chat.content===undefined){
                            var dateR = new Date(chat.timestamp_ms);
                            return (
                                <div className='convoAreaR' key={i}>
                                    <div className="tooltip">
                                        <div className="tooltiptext">
                                            Reel Was Shared<br/>
                                            {decodeURIComponent(escape(chat.sender_name))}<br/>
                                            {dateR.toDateString()}<br/>
                                            {dateR.toLocaleTimeString()}
                                        </div>
                                        <div className="messageReceived">
                                            {<img src={reelIcon} alt=""/>}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }else{
                            var dateR1 = new Date(chat.timestamp_ms);
                            return (
                                <div className='convoAreaR' key={i}>
                                    <div className='senderInitHolder'>
                                        <div className = 'senderInitial'>
                                            {decodeURIComponent(escape(chat.sender_name))===null?  "I" :decodeURIComponent(escape(chat.sender_name))[0]}
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <div className="tooltiptext">
                                            {decodeURIComponent(escape(chat.sender_name))}<br/>
                                            {dateR1.toDateString()}<br/>
                                            {dateR1.toLocaleTimeString()}
                                        </div>
                                        <div className="messageReceived">
                                            {decodeURIComponent(escape(chat.content))}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }
                        })}</div>}</div>
                </>
        )
    }
}

export default Messages;
