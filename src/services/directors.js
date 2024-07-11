let directors = [
  { id: "A", name: "pepito", lastname: "perez", country: "colombia" },
  { id: "B", name: "paco", lastname: "rubio", country: "peru" },
  { id: "C", name: "pedro", lastname: "guaca", country: "mexico" },
];

export const readDirectors = async () => {
  return directors;
};

export const deleteDirector = async ({ id }) => {
  directors = directors.filter((director) => director.id !== id);
  return directors;
};

export const updateDirector = async ({ dataToSave }) => {
  const { id, name, lastname, country } = dataToSave;
  const index = directors.findIndex((director) => director.id === id);
  directors[index] = { id, name, lastname, country };
  return directors;
};
