import { checkAuth } from '../../javascripts/authRequests';

const authState = {
  authenticated() {
    checkAuth()
      .then((res) => {
        if (res.ok) {
          return true;
        }
        return false;
      })
      .catch(() => false);
  },
};

export default authState;
