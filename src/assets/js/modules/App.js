import * as InvAPI from './InvolvementAPI.js';
import getAllShows from './TvAPI.js';

import display from './DisplayData.js';

const key = 'tvapp';
const runApp = () => {
  const content = document.querySelector('.shows');
  if (content.innerHTML === '') {
    content.innerHTML = '<div class=\'loader\'>Loading...</div>';
  }

  if (localStorage.getItem(key) === null) {
    const appid = InvAPI.createNewApp();
    const shows = getAllShows();

    Promise.all([appid, shows])
      .then((responses) => {
        responses.forEach((element) => {
          if (typeof element === 'string') {
            localStorage.setItem(key, JSON.stringify({ appId: element }));
          } else {
            const tvStorage = JSON.parse(localStorage.getItem(key));
            tvStorage.shows = element;
            tvStorage.likes = [];
            tvStorage.comments = [];
            localStorage.setItem(key, JSON.stringify(tvStorage));
            display.render(tvStorage);
          }
        });
      });
  } else {
    const tvStorage = JSON.parse(localStorage.getItem(key));
    display.render(tvStorage);
  }
};

export default runApp;