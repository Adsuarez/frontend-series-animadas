export const ENGLISH_TO_SPANISH_FIELDS = {
  name: "Nombre",
  lastname: "Apellido",
  country: "País",
};

export const SPANISH_TO_ENGLISH_FIELDS = {
  [ENGLISH_TO_SPANISH_FIELDS.name]: "name",
  [ENGLISH_TO_SPANISH_FIELDS.lastname]: "lastname",
  [ENGLISH_TO_SPANISH_FIELDS.country]: "country",
};

export const FIELDS_PER_PAGE = {
  "/directores": [
    ENGLISH_TO_SPANISH_FIELDS.name,
    ENGLISH_TO_SPANISH_FIELDS.lastname,
    ENGLISH_TO_SPANISH_FIELDS.country,
  ],
  "/generos": [ENGLISH_TO_SPANISH_FIELDS.name],
};

export const KEYS_PER_PAGE = {
  "/directores": ["name", "lastname", "country"],
  "/generos": ["name"],
};
