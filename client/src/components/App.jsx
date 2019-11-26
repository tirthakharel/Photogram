// App.js is the root of our website, it is where all the different
// components come together and work as a whole entity

import React, { PureComponent } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login';
import NavBar from './NavBar';
import Post from './Post';
import Profile from './Profile';
import Register from './Register';
import MakePost from './MakePost';
import Comments from './Comments';
import RouteProtector from './RouteProtector';


class App extends PureComponent {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/navBar" component={NavBar} />
          <Route exact path="/makePost" component={RouteProtector(MakePost)} />
          <Route exact path="/post" component={RouteProtector(Post)} />
          <Route exact path="/profile" component={RouteProtector(Profile)} />
          <Route exact path="/comments" component={RouteProtector(Comments)} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    );
  }
}

export default App;
