import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPost } from '../javascripts/postRequests';
import loading from '../images/loading-post.svg';

class Post extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postid: props.postid,
      isLoading: true,
      currentUser: false,
      data: null,
    };
  }

  componentDidMount() {
    const { postid } = this.state;

    getPost(postid)
      .then((data) => {
        if (data) {
          this.setState({ isLoading: false, data });
        } else {
          throw Error('Data does not exist');
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { data, isLoading, currentUser } = this.state;

    if (isLoading) {
      return (
        <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
          <div className="uk-card-body" />
          <div className="uk-card-media-top uk-flex uk-flex-center">
            <img src={loading} alt="" />
          </div>
          <div className="uk-card-body" />
        </div>
      );
    }

    if (!currentUser) {
      return (
        <div className="uk-card uk-card-default uk-card-hover uk-align-center" uk-scrollspy="cls: uk-animation-slide-left; repeat: true">
          <h3 className="uk-card-title uk-text-left-medium">{data.title}</h3>
          <div className="uk-card-media-top">
            <img src={require('../images/photogram.png')} alt="" />
          </div>
          <div className="uk-card-body">
            <h3 className="uk-card-title uk-text-small">
              Posted by {" "}
              <a href="/">{data.postBy}</a>
            </h3>
            <p id="">{data.description}</p>
            <a href="/" uk-icon="heart" />
          </div>
        </div>
      );
    }

    return '';
  }
}

Post.propTypes = {
  postid: PropTypes.number.isRequired,
};

export default Post;
