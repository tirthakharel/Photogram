/* globals fetch */

import React, { Component } from 'react';
import NavBar from './NavBar';
import { api } from '../api';
import {getUsers} from '../javascripts/userRequests'

const Testdata = {
    recommends: [
    'Jack',
    'Rose',
    'Nick',
    'Tom'
    ]
};


class Follow extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      data: null,
      currentUser: props.currentUser,
      isLoading: true
    };
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    let arr = []
    getUsers()
      .then((data) => {
        data.json()
          .then((usersInfo) => { 
            usersInfo.forEach((element) => {
              if (element.username != this.state.currentUser){
                arr.push(element);
              }
            });
            this.setState({data: arr, isLoading: false});
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const {data, isLoading} = this.state;
    if(isLoading){
      return(
        <div className='uk-cover-container uk-flex uk-flex-center uk-flex-middle'>
        <h1>Wait a Sec...</h1>
        </div>
      )
    }
    else{
    const recommends = data.map((recommend) => { return(
         <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
            <div className="uk-card uk-card-primary uk-card-body uk-card-hover uk-margin-top">
              <h3 class="uk-card-title"><a href=''>{recommend.username}</a></h3>
              <span><p>Follow {recommend.username} to see more POSTs!</p> <button className='uk-button uk-button-danger'>Follow</button></span>
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
  }
export default Follow;
