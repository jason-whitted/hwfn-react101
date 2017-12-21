import * as CONST from '../constants';
import initialState from './initialState';

export default (state = initialState, action) => {
  switch(action.type) {
    case CONST.REALM_STATUS_GET:
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    case CONST.REALM_STATUS_GET_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: undefined,
        expires: Date.now() + 10 * 1000,
      };
    case CONST.REALM_STATUS_GET_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case CONST.REALM_STATUS_EXPIRE:
      return {
        ...state,
        expires: 0,
      };
    case CONST.REALM_STATUS_RESET:
      return initialState;
    default:
      return state;
  }
}
