import express from 'express';
import bodyParser from 'body-parser';
import animeRoutes from './routes/anime_routes.js';

const app = express();
app.use(bodyParser.json());

app.use(animeRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
