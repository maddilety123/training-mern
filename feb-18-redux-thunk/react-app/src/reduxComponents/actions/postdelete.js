import axios from "axios";
const postDelete = (id) => {
  return (dispatch) => {
    // dispatch(getDeleteRequest());
    axios
      .delete(`https://retoolapi.dev/BUCPSc/posts/${id}`, {})
      .then((repsonse) => {
        console.log(repsonse.status);
        dispatch(getDeleteSuccess(repsonse.status));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// const getDeleteRequest = () => {
//   return {
//     type: "delete/request",
//   };
// };

const getDeleteSuccess = (status) => {
  return {
    type: "delete/success",
    payload: status,
  };
};

// const getDeleteFailure = (error) => {
//   return {
//     type: "delete/failure",
//     payload: error,
//   };
// };

export default postDelete;
