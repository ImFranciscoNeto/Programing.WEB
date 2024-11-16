import express from 'express';
import * as AnimeController from '../controllers/anime_controller.js';

const router = express.Router();

// Definindo as rotas para o CRUD de animes
router.post('/animes', AnimeController.createAnimeController);
router.get('/animes', AnimeController.getAllAnimesController);
router.get('/animes/:id', AnimeController.getAnimeByIdController);
router.patch('/update/animes/:id', AnimeController.updateAnimeController);
router.delete('/animes/:id', AnimeController.deleteAnimeController);

export default router;