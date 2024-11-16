import * as AnimeModel from '../models/anime.js';

export const createAnimeService = (name, genre, studio) => {
  if (!name || !genre || !studio) {
    throw new Error('Todos os campos precisam ser preenchidos obrigatoriamente.');
  }
  return AnimeModel.createAnime(name, genre, studio);
};

export const getAllAnimesService = () => {
  return AnimeModel.getAllAnimes();
};

export const getAnimeByIdService = (id) => {
  const anime = AnimeModel.getAnimeById(id);
  if (!anime) {
    throw new Error('Anime não encontrado.');
  }
  return anime;
};

export const updateAnimeService = (id, name, genre, studio) => {
  if (!name || !genre || !studio) {
    throw new Error('Todos os campos precisam ser preenchidos.');
  }

  const updatedAnime = AnimeModel.updateAnime(id, name, genre, studio);
  if (!updatedAnime) {
    throw new Error('Anime não encontrado.');
  }
  return updatedAnime;
};

export const deleteAnimeService = (id) => {
  const success = AnimeModel.deleteAnime(id);
  if (!success) {
    throw new Error('Anime não encontrado.');
  }
  return { message: 'Anime deletado com sucesso.' };
};