import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case CONST.MOUNTS_GET:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case CONST.MOUNTS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        expires: Date.now() + 20 * 60 * 1000, // 20-minutes
      };
    case CONST.MOUNTS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONST.MOUNTS_EXPIRE:
      return {
        ...state,
        expires: 0,
      };
    case CONST.MOUNTS_RESET:
      return initialState;
    default:
      return state;
  }
};
