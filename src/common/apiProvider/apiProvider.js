import qs from 'qs';

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
  const requestUrl = `https://us.api.battle.net/wow${url}?${qs.stringify({
    ...defaultQuery,
    ...query,
  })}`;
  return fetch(requestUrl, options)
    .then(r => r.json())
};

export default apiProvider;
