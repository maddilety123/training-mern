const intialState = {
  email: "",
};
const email = (state = intialState, action) => {
  if (action.type === "email") {
    state.email = "mernstack@gmail.com";
    return { ...state };
  }
  return state;
};
export default email;
