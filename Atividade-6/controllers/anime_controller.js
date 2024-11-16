import * as AnimeService from '../services/anime_service.js';

// Criar Anime
export const createAnimeController = (req, res) => {
  const { name, genre, studio } = req.body;

  try {
    const anime = AnimeService.createAnimeService(name, genre, studio);
    return res.status(201).json(anime);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Listar todos os Animes
export const getAllAnimesController = (req, res) => {
  const animes = AnimeService.getAllAnimesService();
  return res.status(200).json(animes);
};

// Buscar Anime por ID
export const getAnimeByIdController = (req, res) => {
  const { id } = req.params;

  try {
    const anime = AnimeService.getAnimeByIdService(id);
    return res.status(200).json(anime);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

// Atualizar Anime
export const updateAnimeController = (req, res) => {
  const { id } = req.params;
  const { name, genre, studio } = req.body;

  try {
    const updatedAnime = AnimeService.updateAnimeService(id, name, genre, studio);
    return res.status(200).json(updatedAnime);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

// Deletar Anime
export const deleteAnimeController = (req, res) => {
  const { id } = req.params;

  try {
    const response = AnimeService.deleteAnimeService(id);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};