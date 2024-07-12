let genres = [
  { id: "A", name: "comedia" },
  { id: "B", name: "terror" },
  { id: "C", name: "aventura" },
];

export const readGenres = async () => {
  return genres;
};

export const deleteGenre = async ({ id }) => {
  genres = genres.filter((genre) => genre.id !== id);
  return genres;
};

export const updateGenre = async ({ dataToSave }) => {
  const { id, name } = dataToSave;
  const index = genres.findIndex((genre) => genre.id === id);
  genres[index] = { id, name };
  return genres;
};

export const createGenre = async ({ dataToSave }) => {
  const id = crypto.randomUUID();
  const { name } = dataToSave;
  genres.push({ id, name });
  return genres;
};
