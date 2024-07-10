const directors = [
  { id: "1", name: "pepito", lastname: "perez", country: "colombia" },
  { id: "2", name: "paco", lastname: "rubio", country: "peru" },
  { id: "3", name: "pedro", lastname: "guaca", country: "mexico" },
];

export const readDirectors = async () => {
  return directors;
};

export const deleteDirector = async ({ id }) => {
  return directors.filter((director) => director.id !== id);
};
