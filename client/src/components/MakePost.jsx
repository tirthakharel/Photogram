/* globals fetch */

import React, { Component } from 'react';
import { api } from '../api';
import NavBar from './NavBar';

class MakePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visibility: true,
      apiResponse: '',
    };

    this.callAPI = this.callAPI.bind(this);
  }

  componentDidMount() {
    this.callAPI();
  }

  callAPI() {
    fetch(`${api.url}/testAPI`)
      .then((res) => res.text())
      .then((res) => this.setState({ apiResponse: res }))
      .catch((err) => err);
  }

  render() {
    if(this.state.visibility){
      return (
    <div>
    <NavBar />
    <div className="uk-cover-container uk-flex uk-flex-center uk-flex-middle">
        <fieldset className="uk-fieldset">
            <h2>Create Post</h2>
              <div className="">
                  <input className="uk-input" type="text" placeholder="Title"></input>
                </div>
                <div className="uk-margin">
                    <textarea className="uk-textarea" rows="5" placeholder="Description"></textarea>
                </div>
                <div className="uk-margin uk-grid-small uk-child-width-auto uk-grid">
                    <label>
                    <input className="uk-radio" type="radio" name="radio2" checked></input>
                        Private
                    </label>
                    <label>
                    <input className="uk-radio" type="radio" name="radio2"></input>
                        Public
                    </label>
                </div>
                <div className="uk-margin">
                    <label htmlFor="image" className="uk-form-label uk-text-large">Select an image to upload:</label>
                    <input id="image" className="uk-input uk-form-width-xxlarge" type="file" name="image" accept="image/*"></input>
                </div>
                <input type="submit" className= "uk-button-primary uk-button-large uk-text-large" value="Upload"></input>
                <a className= "uk-margin-top uk-margin-left uk-button-danger uk-button-large uk-text-large" href={'/'} value="Upload">Cancel</a>
            </fieldset>
        </div> 
      </div>
            )
        }
    else{
        return null;
    }
    }
}


export default MakePost;