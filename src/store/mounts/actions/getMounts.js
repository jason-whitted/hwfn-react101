import { apiProvider } from 'common';

import * as CONST from '../constants';

const getMounts = ({ force = false } = {}) =>
  (dispatch, getState) =>
  new Promise((resolve, reject) => {
    // TODO: Add some logic for conditional loading

    dispatch({ type: CONST.MOUNTS_GET });

    const request = {
      url: '/mount/',
      method: 'GET',
      data: null,
    };

    const success = ({ mounts }) => {
      dispatch({
        type: CONST.MOUNTS_GET_SUCCESS,
        payload: mounts,
      });
    };

    const failure = error => {
      dispatch({
        type: CONST.MOUNTS_GET_FAILURE,
        payload: error.message,
      });
      throw error;
    };

    return apiProvider(request)
      .then(success)
      .catch(failure);
  });

export default getMounts;
