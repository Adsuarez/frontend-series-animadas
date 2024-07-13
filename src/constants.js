export const ENGLISH_TO_SPANISH_FIELDS = {
  name: "Nombre",
  lastname: "Apellido",
  country: "País",
  genre: "Género",
  actors: "Actores",
  director: "Director",
  review: "Reseña",
  imageUrl: "Portada",
  trailerUrl: "Trailer",
};

export const SPANISH_TO_ENGLISH_FIELDS = {
  [ENGLISH_TO_SPANISH_FIELDS.name]: "name",
  [ENGLISH_TO_SPANISH_FIELDS.lastname]: "lastname",
  [ENGLISH_TO_SPANISH_FIELDS.country]: "country",
  [ENGLISH_TO_SPANISH_FIELDS.genre]: "genre",
  [ENGLISH_TO_SPANISH_FIELDS.actors]: "Actores",
  [ENGLISH_TO_SPANISH_FIELDS.director]: "Director",
  [ENGLISH_TO_SPANISH_FIELDS.review]: "review",
  [ENGLISH_TO_SPANISH_FIELDS.imageUrl]: "imageUrl",
  [ENGLISH_TO_SPANISH_FIELDS.trailerUrl]: "trailerUrl",
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
  [ROUTES.genres]: [ENGLISH_TO_SPANISH_FIELDS.name],
  [ROUTES.movies]: [
    ENGLISH_TO_SPANISH_FIELDS.name,
    ENGLISH_TO_SPANISH_FIELDS.genre,
    ENGLISH_TO_SPANISH_FIELDS.country,
    ENGLISH_TO_SPANISH_FIELDS.actors,
    ENGLISH_TO_SPANISH_FIELDS.director,
    ENGLISH_TO_SPANISH_FIELDS.review,
    ENGLISH_TO_SPANISH_FIELDS.imageUrl,
    ENGLISH_TO_SPANISH_FIELDS.trailerUrl,
  ],
};

//TODO: use english constans to construct this constant
export const KEYS_PER_PAGE = {
  [ROUTES.directors]: ["name", "lastname", "country"],
  [ROUTES.genres]: ["name"],
  [ROUTES.movies]: [
    "name",
    "country",
    "genre",
    "actors",
    "director",
    "review",
    "imageUrl",
    "trailerUrl",
  ],
};
