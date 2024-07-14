import storage from "./storage";

let { actors } = storage;

export const createActor = async ({ dataToSave }) => {
  const id = crypto.randomUUID();
  const { name, lastname, country } = dataToSave;
  actors.push({ id, name, lastname, country });
  return actors;
};

export const readActors = async () => {
  return actors;
};

export const updateActor = async ({ dataToSave }) => {
  const { id, name, lastname, country } = dataToSave;
  const index = actors.findIndex((actor) => actor.id === id);
  actors[index] = { id, name, lastname, country };
  return actors;
};

export const deleteActor = async ({ id }) => {
  actors = actors.filter((actor) => actor.id !== id);
  return actors;
};
