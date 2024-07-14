let countries = [
  { id: "A", name: "estados unidos" },
  { id: "B", name: "mexico" },
  { id: "C", name: "japon" },
];

export const createCountry = async ({ dataToSave }) => {
  const id = crypto.randomUUID();
  const { name } = dataToSave;
  countries.push({ id, name });
  return countries;
};

export const readCountries = async () => {
  return countries;
};

export const updateCountry = async ({ dataToSave }) => {
  const { id, name } = dataToSave;
  const index = countries.findIndex((country) => country.id === id);
  countries[index] = { id, name };
  return countries;
};

export const deleteCountry = async ({ id }) => {
  countries = countries.filter((country) => country.id !== id);
  return countries;
};
