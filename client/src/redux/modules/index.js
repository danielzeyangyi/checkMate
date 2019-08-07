import { combineReducers } from 'redux';
import entities from './entities';
import home from './home';
import app from './app';
import detail from './detail';

const rootReducer = combineReducers({
  entities,
  home,
  app,
  detail
});

export default rootReducer;
