import './style.css';
import { getMovies, searchbar } from './models/displayMovies';

const form = document.getElementById('form');
const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=d2f3f7df7854008b58687802ab337feb&page=1';

getMovies(API_URL);
form.addEventListener('submit', searchbar());