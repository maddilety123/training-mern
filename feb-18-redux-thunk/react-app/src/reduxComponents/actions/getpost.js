import axios from "axios";
const getPostAndAppendToStore = () => {
  return (dispatch) => {
    dispatch(getPostRequest());
    axios
      .get("https://retoolapi.dev/BUCPSc/posts")
      .then((repsonse) => {
        dispatch(getPostSuccess(repsonse.data));
      })
      .catch((error) => {
        dispatch(getPostFailure(error));
      });
  };
};

const getPostRequest = () => {
  return {
    type: "post/request",
  };
};

const getPostSuccess = (data) => {
  return {
    type: "post/success",
    payload: data,
  };
};

const getPostFailure = (error) => {
  return {
    type: "post/failure",
    payload: error,
  };
};

export default getPostAndAppendToStore;
