import React from 'react';
import { Redirect } from 'react-router-dom';
import { checkAuth } from '../javascripts/authRequests';

const RouteProtector = (Component) => class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      isLoading: true,
    };
  }

  componentDidMount() {
    checkAuth().then((res) => {
      this.setState({ isAuthenticated: res.ok, isLoading: false });
    }).catch(() => {
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isAuthenticated, isLoading } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (!isAuthenticated) {
      return <Redirect to="/login" />;
    }

    return <Component {...this.props} />;
  }
};

export default RouteProtector;
