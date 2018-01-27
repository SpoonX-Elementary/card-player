import { createStore, combineReducers } from 'redux';
import main from './reducers';

const reducers = combineReducers({ main });
const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

export default createStore(reducers, reduxDevTools);
