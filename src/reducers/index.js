import { combineReducers } from 'redux';
import movies from './moviesReducer';
import status from './statusReducer';

const rootReducer = combineReducers({
  status,
  movies
});

export default rootReducer;