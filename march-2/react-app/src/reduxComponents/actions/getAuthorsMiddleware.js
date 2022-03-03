import axios from "axios";
const getAuthorsMiddleware = () => {
  return (dispatch) => {
    dispatch(getAuthorsReq());
    axios
      .get("http://localhost:4000/authors")
      .then((response) => {
        dispatch(getAuthorsSuccess(response.data.authorslist));
      })
      .catch((err) => {
        dispatch(getAuthorsFailure(err));
      });
  };
};

const getAuthorsReq = () => {
  return {
    type: "get/authors/req",
  };
};

const getAuthorsSuccess = (authorslist) => {
  return {
    type: "get/authors/success",
    payload: authorslist,
  };
};

const getAuthorsFailure = (err) => {
  return {
    type: "get/authors/failure",
    payload: err,
  };
};

export default getAuthorsMiddleware;
