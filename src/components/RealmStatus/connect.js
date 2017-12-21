import { getRealmStatus, selectRealmStatusIsLoading, selectRealmStatus } from 'store/realmStatus';

const select = state => ({
  loading: selectRealmStatusIsLoading(state),
  statuses: selectRealmStatus(state),
});

const boundActions = {
  getRealmStatus,
};

export default [select, boundActions];
