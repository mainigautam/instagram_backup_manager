import React , {useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './style/inbox.css'
import './Components/Footer'
import instaLogo from './Components/instagram-new.png'
import Footer from './Components/Footer';
function Inbox() {
    //Fetch Data
    const [profile, setProfile] = useState([]);
    const [messages , setMessages] = useState([]);
    const [loading , setLoading] = useState(true)
    const fetchData = async () => {
        const result= await Promise.all([
            fetch('/profile'),
            fetch('/messages')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setProfile(result[0]);
        setMessages(result[1]);
        setLoading(false)
    }
    useEffect( ()=>{
        fetchData();
    },[]);

//Tells Among Which the Chat is going on 
const betweenmap = messages.map((instagrammers)=>{
    return instagrammers.participants;
})

//Tells The Account Owner Name
const mainuser= profile.username;

//Array of Users In Inbox
var arr = [];
function remUsr(betweenmap){
    for(let i=0;i<betweenmap.length;i++){
        if(betweenmap[i].length<=2){
            var ele = betweenmap[i].filter((val)=>val !== mainuser); //Removes the name of Account Owner
            arr.push(ele[0]);
        }else if(betweenmap[i].length>2){
            var ele2 = betweenmap[i].filter((val)=>val !== mainuser); //Removes the name of Account Owner
            arr.push(ele2);
        }
    }
}
remUsr(betweenmap)
//Handle Deactivated Accounts Of Users
var arrUsr = [];
var temp = 'Instagrammer';
for(let i=0;i<arr.length;i++){
  if(arr[i]===undefined){
    arrUsr.push(temp);
  }else{
   arrUsr.push(arr[i]);
 }
}


// arrUser Has Been Used to Provide Info For Usernames and Initials
if(loading){
            return(
                    <>
                        <div className="coverScreen">
                            <img src={instaLogo} alt="" className="lazyLoader"/>
                        </div>
                    </>
            )}else{
                    return (
                            <div className="black">
                                <div className="titleBarInbox">
                                    <div className="titleText text-center">
                                        Instagram Backup Manager
                                    </div>
                                </div>
                                {arrUsr.length <= 0 ? 
                                <div>
                                    <div className="noPost">
                                        No Messages To Show in this Backup
                                    </div>
                                </div> :
                                <div>
                                    {arrUsr.map((info,i)=>{
                                    return(
                                            <Link to={'direct/' + i} key={i}>
                                               <div className="inbox">
                                                    <div className='profileCircle'>
                                                        <div className="subCircle">
                                                            <div className="profileInitials">
                                                                {info[0].length===1? info[0]: <i className="fas fa-users"></i>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='friendName'>
                                                        {info}
                                                    </div>
                                                </div>
                                            </Link>
                                    )})}
                                </div>}
                                {/*Footer Starts Here  */}
                                <Footer direct={true}/>
                            </div>
                    );
               }
}

export default Inbox;
/*
ToDo : 
1). Handle the chats of Account Owner with him/her self.
3). Filter Symbols and Sepcial Characters using .
*/