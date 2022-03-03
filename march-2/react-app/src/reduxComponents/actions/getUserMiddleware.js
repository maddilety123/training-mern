import axios from "axios";
const getUserMiddleware = (id) => {
  return (dispatch) => {
    axios
      .get(`http://localhost:4000/users/${id}`)
      .then((response) => {
        dispatch(getUserSuccess(response.data));
      })
      .catch((err) => {
        dispatch(getUserFailure(err));
      });
  };
};

const getUserSuccess = (authorslist) => {
  return {
    type: "get/user/success",
    payload: authorslist,
  };
};

const getUserFailure = (err) => {
  return {
    type: "get/user/failure",
    payload: err,
  };
};

export default getUserMiddleware;
