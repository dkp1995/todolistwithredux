import masterReducer from "./reducers/masterReducer";

import  { createStore } from 'redux'

const store = createStore(masterReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;