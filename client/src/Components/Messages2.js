import React , {useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Footer from './Footer';
import instaLogo from './instagram-new.png'

const Messages = ({match}) => {

    //Fetch Data
    const [profile, setProfile] = useState([]);
    const [messages , setMessages] = useState([]);
    const [loading , setLoading] = useState(true)
    const {params: { id } } = match;

    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/profile'),
            fetch(`/message/v2/${id}`),
        ])
        .then((responses) => {
            return Promise.all(responses.map((response) => {
                return response.json();
        }));})
        setProfile(result[0]);
        setMessages(result[1]);
        setLoading(false)
    }
    useEffect( ()=>{
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ ]);

    if(!loading){
        //The Other Chat Participant
        var username = profile.name; //Account Owner
        var wout;
        if(messages.participants[0] === username){
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
                    <div className="titleBarInbox">
                        <div className='backNav'>
                            <Link to='/direct'>
                                <i className="fas fa-2x fa-chevron-left white"></i>
                            </Link>
                        </div>
                        <div className="profilecircle">
                            <div className="profileinitials">
                                {name2.name[0].toLocaleUpperCase()} 
                            </div>    
                        </div> 
                        <div className="username">
                            {decodeURIComponent(escape(name2.name))}
                        </div>
                    </div>
                    {/* Map The Text Of Sender and Receiver */}
                    {mesArr.reverse().map((chat,i)=>{
                        if(decodeURIComponent(escape(chat.sender_name)) === username){
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
                                                    {<img src={`/${chat.photos[0].uri}`} alt="" className="imageSent"/>}
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
                        }else if(decodeURIComponent(escape(chat.sender_name)) !== username && chat.photos !==undefined){
                            var dateRP = new Date(chat.timestamp_ms);
                            return (
                                <div className='convoAreaR' key={i}>
                                    <div className="tooltip">
                                        <div className="tooltiptext">
                                            {dateRP.toDateString()}<br/>
                                            {dateRP.toLocaleTimeString()}
                                        </div>
                                        <div>
                                            {<img src={`/${chat.photos[0].uri}`} alt="" className="imageSent"/>}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }else{
                            var dateR = new Date(chat.timestamp_ms);
                            return (
                                <div className='convoAreaR' key={i}>
                                    <div className='senderInitHolder'>
                                        <div className = 'senderInitial'>
                                            {decodeURIComponent(escape(chat.sender_name))===null?  "I" :chat.sender_name[0]}
                                        </div>
                                    </div>
                                    <div className="tooltip">
                                        <div className="tooltiptext">
                                            {decodeURIComponent(escape(chat.sender_name))}<br/>
                                            {dateR.toDateString()}<br/>
                                            {dateR.toLocaleTimeString()}
                                        </div>
                                        <div className="messageReceived">
                                            {decodeURIComponent(escape(chat.content))}
                                            {/* {chat.content} */}
                                        </div>  
                                    </div>
                                </div>
                            )
                        }
                        })}
                    {/*Footer Starts Here  */}
                    <Footer direct={true}/>
                </>
        )
    }
}

export default Messages;
