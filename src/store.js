import { createStore, combineReducers } from 'redux';

const store = () => {
  const reducers = combineReducers({});

  return createStore(reducers);
};

export default store;
