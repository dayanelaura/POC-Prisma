import { Router } from "express";
import { likeOrDislike, showLikedMovies } from "../controllers/likesControllers.js";

const likesRouter = Router();

likesRouter.get('/likes', showLikedMovies);
likesRouter.post('/likes/:id', likeOrDislike);

export default likesRouter;