const intialState = {
  userlist: [],
  productslist: [],
  grouplist: [],
  isForm: false,
};
const rootReducer = (state = intialState, action) => {
  if (action.type === "todo/todoadd") {
    state.userlist.push(action.payload);
  } else if (action.type === "product") {
    state.productslist.push(action.payload);
  } else if (action.type === "group") {
    state.grouplist.push(action.payload);
  } else if (action.type === "userdelete") {
    state.userlist = action.payload;
  } else if (action.type === "productdelete") {
    state.productslist = action.payload;
  } else if (action.type === "groupdelete") {
    state.grouplist = action.payload;
  }

  return state;
};

export default rootReducer;
