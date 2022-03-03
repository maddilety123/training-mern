const intialState = {
  msg: "",
  msgReq: "",
  msgErrOb: {},
  authorsReq: "",
  authorsList: [],
  authorsErrOb: "",
  user: {},
  userErrOb: {},
};

const rootReducer = (state = intialState, action) => {
  if (action.type === "get/msg/req") {
    state.msgReq = "request started";
    return { ...state };
  } else if (action.type === "get/msg/success") {
    state.msg = action.payload;
    return { ...state };
  } else if (action.type === "get/msg/failure") {
    state.msgErrOb = action.payload;
    return { ...state };
  } else if (action.type === "get/authors/req") {
    state.authorsReq = "request to get authors started";
    return { ...state };
  } else if (action.type === "get/authors/success") {
    state.authorsList = action.payload;
    return { ...state };
  } else if (action.type === "get/authors/failure") {
    state.authorsErrOb = action.payload;
    return { ...state };
  } else if (action.type === "get/user/success") {
    state.user = action.payload;
    return { ...state };
  } else if (action.type === "get/user/failure") {
    state.userErrOb = action.payload;
    return { ...state };
  }

  return state;
};

export default rootReducer;
