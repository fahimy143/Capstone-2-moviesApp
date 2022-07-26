const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=d2f3f7df7854008b58687802ab337feb&query="';

const search = document.getElementById('search');
const main = document.getElementById('main');

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  }
  if (vote >= 5) {
    return 'orange';
  }
  return 'red';
}

export function showMovies(movies) {
  main.innerHTML = '';
  /* eslint-disable */
 
  movies.forEach((movie) => {
    const {
      title, poster_path, vote_average,
    } = movie;

    const movieEL = document.createElement('div');
    movieEL.classList.add('movie');
    movieEL.innerHTML = `
    <img src="${IMG_PATH + poster_path}" alt="${title}">
    <div class="movie-info">
      <h3>${title}</h3>
      <span class="${getClassByRate(vote_average)}">${vote_average}</span>
    </div>
    <div class="Like-comment">
    <button class="comment">comment</button>
    <span class="like"><i style="font-size:24px; color: white"; class="fa heart">&#xf004;</i></span>
    </div>
    `;
    main.appendChild(movieEL);
  });
}

export const getMovies = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  showMovies(data.results);
};

export function searchbar(e) {
  e.preventDefault();

  const searchTerm = search.value;
  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
}
