const intialState = {
  email: "",
  password: "",
  userList: [],
};
const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "email/change":
      state.email = action.payload;
      break;
    case "password/change":
      state.password = action.payload;
      break;
    case "users":
      state.userList = action.payload;
      break;
    default:
  }
  return { ...state };
};
export default rootReducer;
