import axios from'axios'
// we are passing form data to server asynch
export function userSignupRequest(userData) {
  return dispatch => {
    return axios.post('/api/users', userData);
  }
}
