let movies = [
  {
    id: "A",
    name: "tom y jerry",
    genre: "comedia",
    country: "usa",
    actors: "tom, jerry",
    director: "Juan Cosio",
    review:
      "Es una historia de comedia entre un gato (Tom) que quiere comerce un ratón (Jerry)",
    imageUrl:
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fmoviesanywhere.com%2Fmovie%2Ftom-and-jerry-2020&psig=AOvVaw1j3vzWs3X22z64iLKlFMGm&ust=1720970923410000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDCnrSqpIcDFQAAAAAdAAAAABAh",
    trailerUrl: `<iframe width="560" height="315" src="https://www.youtube.com/embed/kP9TfCWaQT4?si=xbBQcO8-A_44XgPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
  },
];

export const createMovie = async ({ dataToSave }) => {
  const id = crypto.randomUUID();
  const { name } = dataToSave;
  movies.push({ id, name });
  return movies;
};

export const readMovies = async () => {
  return movies;
};

export const updateMovie = async ({ dataToSave }) => {
  const { id, name } = dataToSave;
  const index = movies.findIndex((movie) => movie.id === id);
  movies[index] = { id, name };
  return movies;
};

export const deleteMovie = async ({ id }) => {
  movies = movies.filter((movie) => movie.id !== id);
  return movies;
};
