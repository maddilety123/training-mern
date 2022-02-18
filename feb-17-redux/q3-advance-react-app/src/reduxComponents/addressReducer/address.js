const intialState = {
  address: "",
};
const address = (state = intialState, action) => {
  if (action.type === "address") {
    state.address = "Bangalore,Krnataka";
    return { ...state };
  }
  return state;
};
export default address;
