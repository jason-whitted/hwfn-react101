import { createSelector } from 'reselect';

export const selectRealmStatus = state => state.realmStatus.data;

export const selectRealmStatusIsLoading = state => state.realmStatus.loading;

export const selectRealmStatusShouldUpdate = state => {
  const { loading, data, error, expires } = state.realmStatus;
  return !loading && (!data || expires < Date.now());
};
