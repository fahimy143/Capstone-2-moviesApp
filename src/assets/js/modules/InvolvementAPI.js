const involvementApi = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

export const createNewApp = () => fetch(`${involvementApi}/apps/`, {
  method: 'POST',
})
  .then((response) => response.text());

export const createlike = (appid, item1) => fetch(`${involvementApi}/apps/${appid}/likes/`, {
  method: 'POST',
  body: JSON.stringify({ item_id: item1 }),
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
})
  .then((res) => res.json());

export const getlikes = (appid) => fetch(`${involvementApi}/apps/${appid}/likes/`)
  .then((res) => res.json());

export const createcomment = (appid, item1, name, comment) => fetch(`${involvementApi}/apps/${appid}/comments/`, {
  method: 'POST',
  body: JSON.stringify({
    item_id: item1,
    username: name,
    comment,
  }),
})
  .then((res) => res.json());

export const getcomments = (appid, item1) => fetch(`${involvementApi}/apps/${appid}/comments?item_id=${item1}/`)
  .then((res) => res.json());