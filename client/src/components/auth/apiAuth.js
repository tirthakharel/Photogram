import { checkAuth } from '../../javascripts/authRequests';

const authState = {
  authenticated() {
    checkAuth()
      .then((res) => {
        if (res.ok) {
          return true;
        } else {
          return false;
        }
      })
      .catch(() => {
        return false;
      });
  }
}

export default authState;