import { Router } from "express";
import { addMovie, getAllMovies } from "../controllers/moviesControllers.js";

const moviesRouter = Router();

moviesRouter.post('/movies', addMovie);
moviesRouter.get('/movies', getAllMovies);

export default moviesRouter;