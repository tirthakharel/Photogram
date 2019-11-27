/* globals fetch */

import React, { Component } from 'react';
import NavBar from './NavBar';
import { api } from '../api';

const testData = {
  postBy: 'Yiwen123',
  title: 'testTitle',
  tags: ['Cloud', 'Japan'],
  likes:['Tom','Jerry'],
  description: 'I love mountains!',
  image: ""
  // FIXME: Profile Image Missing!!
};

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: testData,
      apiResponse: '' };

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
    const tags = data.tags.map((tag) => (<span className="uk-label uk-margin-bottom">{tag}</span>));
    return (
      <div>
        <NavBar />
        <div className="uk-container uk-container-small">
          <div id="cards" className="uk-child-width-1-2@m uk-align-center uk-background-default">
            <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
              <h3 className="uk-card-title uk-text-left-medium">{data.title}</h3>
              {tags}
              <div className="uk-card-media-top">
                <img src={require('../images/photogram.png')} alt="" />
              </div>
              <div className="uk-card-body">
                <h3 className="uk-card-title uk-text-small">
                  Posted by {" "}
                  <a href="">{data.postBy}</a>
                </h3>
                <p id="">{data.description}</p>
                <a href="" uk-icon="heart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Feed;
