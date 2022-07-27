class Shows {
  constructor() {
    this.shows = [];
  }

  addShows = (show) => {
    this.shows.push(show);
  }
}

const shows = new Shows();
export default shows;