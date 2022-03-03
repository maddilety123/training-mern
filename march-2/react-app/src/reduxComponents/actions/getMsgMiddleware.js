import axios from "axios";
const getMsgMiddleware = () => {
  return (dispatch) => {
    dispatch(getMsgReq());
    axios
      .get("http://localhost:4000/")
      .then((response) => {
        dispatch(getMsgSuccess(response.data.msg));
      })
      .catch((err) => {
        dispatch(getMsgFailure(err));
      });
  };
};

const getMsgReq = (msg) => {
  return {
    type: "get/msg/req",
  };
};

const getMsgSuccess = (msg) => {
  return {
    type: "get/msg/success",
    payload: msg,
  };
};

const getMsgFailure = (err) => {
  return {
    type: "get/msg/failure",
    payload: err,
  };
};

export default getMsgMiddleware;
