import axios from "axios";

const editAction = (post) => {
  console.log(post);
  return function (dispatch) {
    axios
      .put(`https://retoolapi.dev/BUCPSc/posts/${post.id}`, {
        body: post.body,
        title: post.title,
      })
      .then((response) => {
        console.log(response.status);
        // dispatch(editSuccess(response.status));
      })
      .catch((e) => {
        console.log(e);
      });
  };
};

// const editSuccess = (status) => {
//   return {
//     type: "edit/success",
//     payload: status,
//   };
// };

export default editAction;
