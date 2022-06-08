import { combineReducers } from "redux";
import { createStore} from 'redux';
import newData from "./reducer/UserReducers";

const reducers =combineReducers({ 
    abc:newData
})

const store = createStore(reducers, {},  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;