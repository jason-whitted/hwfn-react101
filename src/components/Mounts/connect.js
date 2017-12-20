import { getMounts, selectMountsIsLoading, selectMounts } from 'store/mounts';

const select = state => ({
  loading: selectMountsIsLoading(state),
  mounts: selectMounts(state),
});

const boundActions = {
  getMounts,
};

export default [select, boundActions];
