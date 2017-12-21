import { apiProvider } from 'common';

import * as CONST from '../constants';

export default ({ force = false } = {}) =>
  (dispatch, getState) =>
  new Promise((resolve, reject) => {

    // TODO: Implement logic for conditional loading

    dispatch({ type: CONST.REALM_STATUS_GET });

    const request = {
      url: '/realm/status',
      method: 'GET',
      data: null,
    };

    const success = ({ realms }) => {
      dispatch({
        type: CONST.REALM_STATUS_GET_SUCCESS,
        payload: realms,
      });
    };

    const failure = error => {
      dispatch({
        type: CONST.REALM_STATUS_GET_FAILURE,
        payload: error.message,
      });
      throw error;
    };

    const promise = apiProvider(request).then(success).catch(failure);
    return resolve(promise);
  });
