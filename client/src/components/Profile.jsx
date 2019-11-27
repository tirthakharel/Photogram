/* globals fetch */

import React, { Component } from 'react';
import { api } from '../api';
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
      apiResponse: '',
    };

    this.callAPI = this.callAPI.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch(`${api.url}/testAPI`)
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  render() {
    const { data } = this.state;
    const { isSelf } = data;

    return (
      <div>
        <NavBar />
        <div className="uk-flex uk-flex-center uk-background-default">
          <div className="uk-container uk-container-small">
            <div className="uk-grid" uk-grid>
              <div className="uk-width-1-3 uk-flex uk-flex-middle uk-flex-center">
                <img className="uk-border-pill" style={{ height: '150px', width: '150px' }} id="profile-image" src={require('../images/photogram.png')} alt="" />
              </div>
              <div className="uk-width-expand uk-padding-small uk-flex uk-flex-column">
                <h1 id="username" className="uk-text-light uk-margin-remove uk-heading-xsmall">{data.username}</h1>
                {isSelf && <a className="uk-button uk-button-default uk-margin-right uk-margin-small" style={{ height: '40px', width: '120px' }} href="#follow">Follow</a>}
                <span className="uk-margin-small">
                  <h5 id="followers" className="uk-text-bold">{`Follower: ${(data.followers).length}`}</h5>
                  <h5 id="following" className="uk-text-bold">{`Followee: ${(data.followees).length}`}</h5>
                  <h5 id="name" className="uk-text-bold">{`Name: ${data.firstName + " " + data.lastName}`}</h5>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
