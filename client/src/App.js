import React , {useState,useEffect} from 'react'
import Profile from './Profile'
import Media from './Media'
import Direct from './Direct'
import Direct2 from './Direct2'
import Messages from './Components/Messages'
import Messages2 from './Components/Messages2'
import Post from './Components/Post.js'
import instaLogo from './Components/instagram-new.png'
import Upload from './Upload.js'
import {Route,Switch} from 'react-router-dom';
import Reels from './Reels'
const App = () => {
    const [already , setAlready] = useState(false);
    const [loading , setLoading] = useState(true)
    const [v2 , setV2] = useState(false);
    const fetchData = async  () => {
        const result= await Promise.all([
            fetch('/v2'),
            fetch('/existing')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setAlready(result[1]);
        setV2(result[0]);
        setLoading(false);
    }
    useEffect( ()=>{
        fetchData();
    },[]);

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
                    <Switch>
                        <Route exact path='/' component={ already ? Profile :Upload} />
                        <Route exact path='/upload' component={Upload}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path='/photo/:id' component={Post}/>
                        <Route exact path='/direct' component={v2 ? Direct2 : Direct} />
                        <Route exact path='/direct/:id' component={v2 ? Messages2 : Messages} />
                        <Route exact path='/reels' component={Reels} />
                        <Route exact path='/media' component={Media} />
                    </Switch>
                    </>
                )
        }
}

export default App