import { Router } from "express";
import { addMovieInMyList, deleteMovieOfMyList, getMoviesInMyList, markAsWatched } from "../controllers/mylistControllers.js";

const myListRouter = Router();

myListRouter.get('/mylist', getMoviesInMyList);
myListRouter.post('/mylist', addMovieInMyList);
myListRouter.put('/mylist/:id', markAsWatched);
myListRouter.delete('/mylist/:id', deleteMovieOfMyList);

export default myListRouter;