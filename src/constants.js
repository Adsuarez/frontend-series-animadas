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
  [ENGLISH_TO_SPANISH_FIELDS.actors]: "actors",
  [ENGLISH_TO_SPANISH_FIELDS.director]: "director",
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
  [ROUTES.countries]: [ENGLISH_TO_SPANISH_FIELDS.name],
  [ROUTES.actors]: [
    ENGLISH_TO_SPANISH_FIELDS.name,
    ENGLISH_TO_SPANISH_FIELDS.lastname,
    ENGLISH_TO_SPANISH_FIELDS.country,
  ],
};

export const KEYS_PER_PAGE = {
  [ROUTES.directors]: [
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.name],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.lastname],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.country],
  ],
  [ROUTES.genres]: [SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.name]],
  [ROUTES.movies]: [
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.name],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.country],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.genre],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.actors],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.director],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.review],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.imageUrl],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.trailerUrl],
  ],
  [ROUTES.countries]: [
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.name],
  ],
  [ROUTES.actors]: [
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.name],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.lastname],
    SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.country],
  ],
};

export const REUSABLE_FIELDS = [
  SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.genre],
  SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.country],
  SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.actors],
  SPANISH_TO_ENGLISH_FIELDS[ENGLISH_TO_SPANISH_FIELDS.director],
];

export const BUTTON_MESAGGES_PER_PAGE = {
  [ROUTES.directors]: "Nuevo director",
  [ROUTES.genres]: "Nuevo género",
  [ROUTES.countries]: "Nuevo País",
  [ROUTES.actors]: "Nuevo actor",
  [ROUTES.movies]: "Nueva película",
};

export const TOAST_CREATE_MESSAGE = {
  [ROUTES.directors]: "Nuevo director creado",
  [ROUTES.genres]: "Nuevo género creado",
  [ROUTES.countries]: "Nuevo país creado",
  [ROUTES.actors]: "Nuevo actor creado",
  [ROUTES.movies]: "Nueva película creada",
};

export const TOAST_UPDATE_MESSAGE = {
  [ROUTES.directors]: "Director actualizado",
  [ROUTES.genres]: "Género actualizado",
  [ROUTES.countries]: "País actualizado",
  [ROUTES.actors]: "Actor actualizado",
  [ROUTES.movies]: "Película actualizada",
};

export const PETITIONERS = {
  genres: "genres",
  countries: "countries",
  directors: "directors",
  actors: "actors",
  movies: "movies",
};

export const IMAGES_HOSTNAME = "https://images.moviesanywhere.com/";
