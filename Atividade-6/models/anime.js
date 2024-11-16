import { v4 as uuidv4 } from 'uuid';

let animes = [
  {
    id: uuidv4(),
    name: 'Dragon Ball Daima',
    genre: "Ação, aventura e artes marciais",
    studio: "Toei Animation",
  },
  {
    id: uuidv4(),
    name: 'Naruto Shippuden',
    genre: "Aventura, comédia dramática, fantasia",
    studio: "Studio Pierrot",
  },
  {
    id: uuidv4(),
    name: 'Shingeki no Kyojin',
    genre: "Ação, fantasia sombria, horror e drama",
    studio: "MAPPA Studios",
  },
  {
    id: uuidv4(),
    name: 'Chainsaw Man',
    genre: "Ação, terror e sobrenatural",
    studio: "MAPPA Studios",
  },
];

// Funções que manipulam os dados diretamente (acesso ao armazenamento)

export const createAnime = (name, genre, studio) => {
  const anime = {
    id: uuidv4(),
    name,
    genre,
    studio,
  };
  animes.push(anime);
  return anime;
};

export const getAllAnimes = () => {
  return animes;
};

export const getAnimeById = (id) => {
  return animes.find((anime) => anime.id === id);
};

export const updateAnime = (id, name, genre, studio) => {
  const index = animes.findIndex((anime) => anime.id === id);
  if (index === -1) return null;

  animes[index] = { ...animes[index], name, genre, studio };
  return animes[index];
};

export const deleteAnime = (id) => {
  const index = animes.findIndex((anime) => anime.id === id);
  if (index === -1) return false;

  animes.splice(index, 1);
  return true;
};