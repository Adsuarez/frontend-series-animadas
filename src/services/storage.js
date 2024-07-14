const storageMode = process.env.NEXT_PUBLIC_STORAGE_MODE;

let genres = [];
let actors = [];
let countries = [];
let directors = [];
let movies = [];

if (storageMode === "IN_MEMORY") {
  genres = [
    { id: "A", name: "comedia" },
    { id: "B", name: "terror" },
    { id: "C", name: "aventura" },
  ];

  actors = [
    { id: "A", name: "camilo", lastname: "iniesta", country: "españa" },
    { id: "B", name: "guillermo", lastname: "del toro", country: "mexico" },
    { id: "C", name: "adam", lastname: "sandler", country: "estados unidos" },
  ];

  countries = [
    { id: "A", name: "estados unidos" },
    { id: "B", name: "mexico" },
    { id: "C", name: "japon" },
  ];

  directors = [
    { id: "A", name: "pepito", lastname: "perez", country: "colombia" },
    { id: "B", name: "paco", lastname: "rubio", country: "peru" },
    { id: "C", name: "pedro", lastname: "guaca", country: "mexico" },
  ];

  movies = [
    {
      id: "A",
      name: "tom y jerry",
      genre: "comedia",
      country: "usa",
      actors: "tom, jerry",
      director: "Juan Cosio",
      review:
        "Es una historia de comedia entre un gato (Tom) que quiere comerce un ratón (Jerry)",
      imageUrl:
        "https://images.moviesanywhere.com/e0708d2e8ab020cfa55372e8949bc385/b9ce327f-8e8f-4851-a0eb-2e1ce48e7ceb.webp?h=375&resize=fit&w=250",
      trailerUrl: `<iframe width="250" height="139" src="https://www.youtube.com/embed/kP9TfCWaQT4?si=xbBQcO8-A_44XgPI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
    },
  ];
}

const storage = {
  genres,
  actors,
  countries,
  directors,
  movies,
};

export default storage;
