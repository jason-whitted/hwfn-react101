import { combineReducers } from 'redux';

import { mountsReducer } from './mounts';

export default combineReducers({
  mounts: mountsReducer,
});
