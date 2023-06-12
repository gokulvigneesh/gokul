import { createStore } from 'redux';
import rootReducer from './reducers.jsx';

const store = createStore(rootReducer);

export default store;
