import qs from 'qs';

import mounts from './mounts';

const defaultQuery = {
  locale: 'en_US',
  apikey: 'q5q697bfxh9ev2yecryrc7cc2cdta82n',
};

const apiProvider = ({
  url,
  query = {},
  method = 'GET',
  data = undefined,
  options = {},
}) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, 1500);
  })
    .then(() => {
      if(url === '/mount/') return Promise.resolve(mounts);

      const requestUrl = `https://us.api.battle.net/wow${url}?${qs.stringify({
        ...defaultQuery,
        ...query,
      })}`;
      return fetch(requestUrl, options)
        .then(resp => {
          const { status, statusText } = resp;

          if (status >= 400) {
            throw new Error(`${status} - ${statusText}`);
          }

          return resp.json();
        });
    });
};

export default apiProvider;
