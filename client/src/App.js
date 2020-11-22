import React from 'react'
import Profile from './Profile'
import Media from './Media'
import Direct from './Direct'
import Messages from './Components/Messages'
import Post from './Components/Post.js'
import Upload from './Upload.js'
import {Route,Switch} from 'react-router-dom';
const App = () => {
    return (
        <>     
        <Switch>
            <Route exact path='/' component={Upload} />
            <Route exact path="/profile" component={Profile}/>
            <Route exact path='/photo/:id' component={Post}/>
            <Route exact path='/direct' component={Direct} />
            <Route exact path='/direct/:id' component={Messages} />
            <Route exact path='/timeline' component={Profile} />
            <Route exact path='/media' component={Media} />
        </Switch>
        </>
    )
}

export default App