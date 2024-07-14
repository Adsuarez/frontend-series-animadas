import storage from "./storage";

let { movies } = storage;

export const createMovie = async ({ dataToSave }) => {
  const id = crypto.randomUUID();
  const {
    name,
    genre,
    country,
    actors,
    director,
    review,
    imageUrl,
    trailerUrl,
  } = dataToSave;
  movies.push({
    id,
    name,
    genre,
    country,
    actors,
    director,
    review,
    imageUrl,
    trailerUrl,
  });
  return movies;
};

export const readMovies = async () => {
  return movies;
};

export const updateMovie = async ({ dataToSave }) => {
  const {
    id,
    name,
    genre,
    country,
    actors,
    director,
    review,
    imageUrl,
    trailerUrl,
  } = dataToSave;
  const index = movies.findIndex((movie) => movie.id === id);
  movies[index] = {
    id,
    name,
    genre,
    country,
    actors,
    director,
    review,
    imageUrl,
    trailerUrl,
  };
  return movies;
};

export const deleteMovie = async ({ id }) => {
  movies = movies.filter((movie) => movie.id !== id);
  return movies;
};
