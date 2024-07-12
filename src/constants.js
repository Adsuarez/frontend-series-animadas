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

export const ROUTES = {
  directors: "/directores",
  genres: "/generos",
  countries: "/paises",
  actors: "/actores",
  movies: "/peliculas",
};

export const FIELDS_PER_PAGE = {
  [ROUTES.directors]: [
    ENGLISH_TO_SPANISH_FIELDS.name,
    ENGLISH_TO_SPANISH_FIELDS.lastname,
    ENGLISH_TO_SPANISH_FIELDS.country,
  ],
  "/generos": [ENGLISH_TO_SPANISH_FIELDS.name],
};

export const KEYS_PER_PAGE = {
  [ROUTES.directors]: ["name", "lastname", "country"],
  "/generos": ["name"],
};
