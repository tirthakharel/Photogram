import React, { Component } from 'react';
import NavBar from './NavBar';
import Post from './Post';
import { getUser } from '../javascripts/userRequests';

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    getUser()
      .then((user) => {
        this.setState({ data: user });
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <NavBar />
        <div className="uk-container uk-container-small">
          <div id="cards" className="uk-child-width-1-2@m uk-align-center uk-background-default">
            {/* Posts will go here */}
            <Post postid={0} />
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
