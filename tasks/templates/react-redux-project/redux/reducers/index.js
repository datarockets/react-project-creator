import { combineReducers } from 'redux';
import reducers from './';

export default combineReducers({
  ...reducers,
});
