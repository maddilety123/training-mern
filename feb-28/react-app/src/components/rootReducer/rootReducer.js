const intialState = {
  userList: [],
};

const rootReducer = (state = intialState, action) => {
  if (action.type === "adduser") {
    state.userList = [...state.userList, action.payload];
    return { ...state };
  }
  return state;
};

export default rootReducer;
