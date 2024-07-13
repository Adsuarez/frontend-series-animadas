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
      "https://images.moviesanywhere.com/e0708d2e8ab020cfa55372e8949bc385/b9ce327f-8e8f-4851-a0eb-2e1ce48e7ceb.webp?h=375&resize=fit&w=250",
    trailerUrl: `<iframe width="250" height="139" src="https://www.youtube.com/embed/kP9TfCWaQT4?si=xbBQcO8-A_44XgPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
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
