/* globals fetch */

import React, { Component } from 'react';
import NavBar from './NavBar';

const testData = {
  firstName: 'Yiwen',
  lastName: 'Tang',
  username: 'Yiwen123',
  posts: ['1', '2'],
  followers: ['John', 'Jack'],
  followees: ['Tom', 'Jerry', 'Nick'],
  isSelf: true,
  // FIXME: Profile Image Missing!!
};

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: testData,
    };
  }

  render() {
    const { data } = this.state;
    // const { isSelf } = data;

    return (
      <div>
        <NavBar />
        <div className="uk-flex uk-flex-center uk-background-default">
          <div className="uk-container uk-container-small">
            <div className="uk-grid uk-margin-medium-bottom" uk-grid="true">
              <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                <img className="uk-border-pill" style={{ height: '150px', width: '150px' }} id="profile-image" src="" alt="" />
              </div>
              <div className="uk-section uk-section-default uk-padding-small uk-margin-left">
                <div className="uk-flex uk-margin-small-bottom uk-flex-row uk-flex-middle">
                  <h1 id="username" className="uk-text-light uk-margin-remove uk-heading-xsmall">{data.username}</h1>
                  <a className="uk-button uk-button-default uk-margin-left" style={{height: '40px'}} href="#create-post">Create Post</a>
                </div>
                <ul className="uk-margin-remove" style={{ padding: '0px', listStyleType: 'none' }}>
                  <li className="uk-text-bold uk-margin-bottom uk-margin-right uk-float-left">
                    <span id="posts" className="uk-text-light">
                      posts
                    </span>
                  </li>
                  <li className="uk-text-bold uk-margin-bottom uk-margin-left uk-margin-right uk-float-left">
                    {data.followers}
                    <span id="followers" className="uk-text-light">
                     followers
                    </span>
                  </li>
                  <li className="uk-text-bold uk-margin-bottom uk-margin-left uk-float-left">
                    {data.followees}
                    <span id="following" className="uk-text-light">
                     following
                    </span>
                  </li>
                </ul>
                <div className="uk-flex uk-flex-row uk-flex-middle uk-flex-center" />
                <p id="name" className="uk-text-light" />
              </div>
              <div className="uk-container uk-container-small uk-margin-top">
                <div id="recentPost" className="uk-child-width-1-2@m uk-align-center uk-background-default">
                  {/* The most recent Post will be added here. */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
