import React from 'react'
import Profile from './Profile'
import Media from './Media'
// import Check from './dev/Check'
import Direct from './Direct'
import Messages from './Components/Messages'
import Post from './Components/Post.js'
import {Route,Switch} from 'react-router-dom';
const App = () => {
    return (
        <>     
        <Switch>
            <Route exact path='/' component={Profile} />
            <Route exact path='/photo/:id' component={Post}/>
            <Route exact path='/direct' component={Direct} />
            <Route exact path='/direct/:id' component={Messages} />
            <Route exact path='/timeline' component={Profile} />
            <Route exact path='/media' component={Media} />
            {/* <Route exact path='/dev' component={Check} /> */}
        </Switch>
        </>
    )
}

export default App