import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style/css/all.css'
import './style/profile.css'
import './style/navigator.css'
import './style/inbox.css'
import './style/messages.css'
import {BrowserRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
