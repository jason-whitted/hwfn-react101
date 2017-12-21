import { combineReducers } from 'redux';

import { mountsReducer } from './mounts';
import { realmStatusReducer } from './realmStatus';

export default combineReducers({
  mounts: mountsReducer,
  realmStatus: realmStatusReducer,
});
