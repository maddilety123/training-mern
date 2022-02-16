import {createStore} from "redux"
import rootReducer from '../reducer/reduce'

const store=createStore(rootReducer)

export default store