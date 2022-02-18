const intialState = {
  contact: "",
};
const contact = (state = intialState, action) => {
  if (action.type === "contact") {
    state.contact = "8919345678";
    return { ...state };
  }
  return state;
};
export default contact;
