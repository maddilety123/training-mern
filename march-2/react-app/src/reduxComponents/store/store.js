import rootReducer from "../rootReducer/rootreducer";
import thunk from "redux-thunk";
import { applyMiddleware } from "redux";
import { createStore } from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
