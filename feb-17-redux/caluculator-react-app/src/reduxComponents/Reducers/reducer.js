const intialState = {
  number1: "",
  number2: "",
  result: "",
};
const rootReducer = (state = intialState, action) => {
  switch (action.type) {
    case "number1":
      state.number1 = action.payload;
      break;
    case "number2":
      state.number2 = action.payload;
      break;
    case "add":
      state.result = parseInt(state.number1) + parseInt(state.number2);
      break;
    case "substraction":
      state.result = parseInt(state.number1) - parseInt(state.number2);
      break;
    case "multiplication":
      state.result = parseInt(state.number1) * parseInt(state.number2);
      break;
    case "division":
      state.result = parseInt(state.number1) / parseInt(state.number2);
      break;

    default:
  }
  return { ...state };
};

export default rootReducer;
