import email from "../emailReducer/email";
import address from "../addressReducer/address";
import contact from "../contactReducer/contact";
import { combineReducers } from "redux";

const rootReducer = combineReducers({ email, address, contact });

export default rootReducer;
