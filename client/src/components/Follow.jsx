/* globals fetch */

import React, { Component } from 'react';
import NavBar from './NavBar';
import {getUsers, getUser} from '../javascripts/userRequests'
import PropTypes from 'prop-types';
import { follow } from '../javascripts/followRequests';

class Follow extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: null,
      currentUser: null,
      isLoading: true
    };

    this.handleFollow = this.handleFollow.bind(this);
}

  componentDidMount() {
    getUser()
    .then((data) => {
      data.json()
      .then((userInfo) => {
        this.setState({currentUser: userInfo});
      })
      .catch((err) => {
        console.log(err);
      });
    })
    getUsers()
      .then((data) => {
        data.json()
          .then((usersInfo) => { 
            this.setState({data: usersInfo, isLoading: false});
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  handleFollow(event){
      event.preventDefault();
      const usernameB = event.target.id;
      follow(usernameB)
      .then((res) => {
        if (res.ok) {
          this.props.history.push('/');
        } else {
          console.log(res);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {data, isLoading, currentUser} = this.state;
    if(isLoading){
      return(
        <div className='uk-cover-container uk-flex uk-flex-center uk-flex-middle'>
        <h1>Wait a Sec...</h1>
        </div>
      )
    }
    else{
    const recommends = data.map((name) => { 
      if(name !== currentUser.username){
      return(
         <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
            <div className="uk-card uk-card-primary uk-card-body uk-card-hover uk-margin-top">
              <h3 class="uk-card-title"><a href=''>{name}</a></h3>
              <span><p>Follow {name} to see more POSTs!</p> <button id = {name} value = {currentUser.username} onClick={this.handleFollow} className='uk-button uk-button-danger'>Follow</button></span>
            </div>
        </div>
    )}
  });
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
  }


Follow.propTypes = {
    currentUser: PropTypes.bool.isRequired,
  };


export default Follow;
