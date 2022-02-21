import rootReducer from "../reducer/rootreducer";
import { createStore } from "redux";
const store = createStore(rootReducer);

export default store;
