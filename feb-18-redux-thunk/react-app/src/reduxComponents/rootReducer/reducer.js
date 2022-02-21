const intialState = {
  postList: [],
  errorObject: {},
  isLoading: false,
  deleteStatus: "",
  searchInput: "",
  showObject: {},
  editObject: {},
};

const rootReducer = (state = intialState, action) => {
  if (action.type === "post/request") {
    return { ...state, isLoading: true };
  } else if (action.type === "post/success") {
    state.postList = [...action.payload];
    return { ...state, isLoading: false };
  } else if (action.type === "post/failure") {
    state.errorObject = action.payload;
    return { ...state };
  } else if (action.type === "delete/success") {
    state.deleteStatus = action.payload;
    return { ...state };
  } else if (action.type === "show") {
    state.showObject = action.payload;
    return { ...state };
  } else if (action.type === "edit") {
    state.editObject = action.payload;
    return { ...state };
  } else if (action.type === "input") {
    state.searchInput = action.payload;
    return { ...state };
  }

  return state;
};

export default rootReducer;
