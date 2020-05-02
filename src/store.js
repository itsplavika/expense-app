import { createStore, combineReducers } from 'redux';
import { langReducer } from "./reducers/lang-reducers.js";
import { appReducer } from './reducers/app-reducers';


const combinedReducers = combineReducers({
    langReducer,
    appReducer
  });   

export let store = createStore(combinedReducers);