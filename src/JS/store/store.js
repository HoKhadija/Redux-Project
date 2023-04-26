import { createStore } from 'redux';
import tasksReducer from '../Reducers/rootReducer';

const store = createStore(tasksReducer);

export default store;