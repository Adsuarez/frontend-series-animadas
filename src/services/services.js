import storage from "./storage";
const storageMode = process.env.NEXT_PUBLIC_STORAGE_MODE;

export const create = async ({ petitioner, dataToSave }) => {
  const id = crypto.randomUUID();
  if (storageMode === "IN_MEMORY") {
    storage[petitioner].push({ id, ...dataToSave });
    return storage[petitioner];
  }
};

export const read = async ({ petitioner }) => {
  if (storageMode === "IN_MEMORY") {
    return storage[petitioner];
  }
};

export const update = async ({ petitioner, dataToSave }) => {
  const { id } = dataToSave;
  if (storageMode === "IN_MEMORY") {
    const index = storage[petitioner].findIndex((item) => item.id === id);
    storage[petitioner][index] = { id, ...dataToSave };
    return storage[petitioner];
  }
};

export const remove = async ({ petitioner, id }) => {
  if (storageMode === "IN_MEMORY") {
    storage[petitioner] = storage[petitioner].filter((item) => item.id !== id);
    return storage[petitioner];
  }
};
