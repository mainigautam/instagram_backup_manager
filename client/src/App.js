import React , {useState,useEffect} from 'react'
import Profile from './Profile'
import Media from './Media'
import Direct2 from './Direct2'
import Messages2 from './Components/Messages2'
import Post from './Components/Post.js'
import instaLogo from './Components/instagram-new.png'
import Upload from './Upload.js'
import NoPage from './Components/NoPage'
import {Route,Switch} from 'react-router-dom';
import Reels from './Reels'
const App = () => {
    const [already , setAlready] = useState(false);
    const [loading , setLoading] = useState(false)
    const fetchData = async  () => {
        const result= await Promise.all([
            fetch('/existing')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setAlready(result[0]);
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
                        <Route exact path='/profile' component={already?Profile:Upload}/>
                        <Route exact path='/photo/:id' component={already? Post:Upload}/>
                        <Route exact path='/direct' component={already?Direct2:Upload} />
                        <Route exact path='/direct/:id' component={already?Messages2:Upload} />
                        <Route exact path='/reels' component={already?Reels:Upload} />
                        <Route exact path='/media' component={already?Media:Upload} />
                        <Route component={NoPage}/>
                    </Switch>
                    </>
                )
        }
}

export default App