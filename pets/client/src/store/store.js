import {createStore} from 'redux';
import {TransactionReducer} from '../reducer/TransactionReducer';

const store = createStore(TransactionReducer);
export default store;