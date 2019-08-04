import { combineReducers } from 'redux';
import products from './products';
import shops from './shops';
import orders from './orders';
import comments from './comments';

export default (rootReducer = combineReducers({
  products,
  shops,
  orders,
  comments
}));
