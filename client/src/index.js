import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/index.css';
import * as serviceWorker from './serviceWorker';

import Registration from './components/Registration';
import Post from './components/Post';
import Profile from './components/Profile';
import NavBar from './components/NavBar';
import Login from './components/Login';


ReactDOM.render(<NavBar />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
