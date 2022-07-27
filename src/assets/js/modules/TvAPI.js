const tvApi = 'https://api.tvmaze.com';

const getAllShows = () => fetch(`${tvApi}/shows`)
  .then((res) => res.json());

export default getAllShows;