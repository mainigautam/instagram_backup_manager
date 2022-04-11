import React , {useState,useEffect} from 'react'
import Profile from './Profile'
import Direct2 from './Direct2'
import Post from './Components/Post.js'
import instaLogo from './Components/instagram-new.png'
import Upload from './Upload.js'
import NoPage from './Components/NoPage'
import Oops from './Components/Oops'
import {Route,Switch} from 'react-router-dom';
const App = () => {
    const [already , setAlready] = useState(false);
    const [compactible , setCompactible] = useState(true);
    const [loading , setLoading] = useState(false)
    const fetchData = async  () => {
        const result= await Promise.all([
            fetch('/isCompactible'),
            fetch('/existing')
        ]).then(function (responses) {
            return Promise.all(responses.map(function (response) {
                return response.json();
        }));})
        setCompactible(result[0])
        setAlready(result[1]);
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
                    {!compactible?
                    <Oops/>:     
                    <Switch>
                        <Route exact path='/' component={ already ? Profile :Upload} />
                        <Route exact path='/profile' component={already?Profile:Upload}/>
                        <Route exact path='/photo/:id' component={already? Post:Upload}/>
                        <Route exact path='/direct' component={already?Direct2:Upload} />
                        <Route component={NoPage}/>
                    </Switch>
                    }
                    </>
                )
        }
}

export default App