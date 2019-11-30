/* globals fetch */

import React, { Component } from 'react';
import NavBar from './NavBar';
import { api } from '../api';

const Testdata = {
    followers: [
    'Jack',
    'Rose',
    'Nick',
    'Tom'
    ]
};


class Follower extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: Testdata,
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
    const {data} = this.state;
    const recommends = data.followers.map((follower) => { return(
         <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
            <div className="uk-card uk-card-primary uk-card-body uk-card-hover uk-margin-top">
              <h3 class="uk-card-title"><a href=''>{follower}</a></h3>
              <span><p>You are currently followed by {follower}!</p> <button className='uk-button uk-button-danger'>Follow</button></span>
            </div>
        </div>
    )});
    return(
    <div>    
        <NavBar />
            <div className="uk-container uk-container-small">
                <div id="cards" className="uk-child-width-1-2@m uk-align-center uk-background-default">
                    <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
                        {recommends}
                    </div>
                </div>
        </div>
    </div>)
        }
    }  
export default Follower;
