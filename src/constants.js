export const COLUMNS_TITLES_DICTIONARY = {
  name: "Nombre",
  lastname: "Apellido",
  country: "País",
};

export const SPANISH_TO_ENGLISH_FIELDS_DICTIONARY = {
  [COLUMNS_TITLES_DICTIONARY.name]: "name",
  [COLUMNS_TITLES_DICTIONARY.lastname]: "lastname",
  [COLUMNS_TITLES_DICTIONARY.country]: "country",
};

export const FIELDS_PER_PAGE = {
  "/directores": [
    COLUMNS_TITLES_DICTIONARY.name,
    COLUMNS_TITLES_DICTIONARY.lastname,
    COLUMNS_TITLES_DICTIONARY.country,
  ],
  "/generos": [COLUMNS_TITLES_DICTIONARY.name],
};

export const KEYS_PER_PAGE = {
  "/directores": ["name", "lastname", "country"],
  "/generos": ["name"],
};
