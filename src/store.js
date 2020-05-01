import { createStore } from 'redux';
import { AppReducer } from './reducers/app-reducers';

export let store = createStore(AppReducer);