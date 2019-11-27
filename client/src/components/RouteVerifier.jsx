/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../javascripts/authRequests';

const RouteVerifier = (Component) => class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNotAuthenticated: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    checkAuth().then((res) => {
      this.setState({ isNotAuthenticated: !(res.ok), isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isNotAuthenticated, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isNotAuthenticated) {
      return <Redirect to="/" />;
    }

    return <Component {...this.props} />;
  }
};

export default RouteVerifier;
