import rootReducer from "../Reducers/reducer";
import { createStore } from "redux";

const store = createStore(rootReducer);

export default store;
