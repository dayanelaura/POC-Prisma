import { Router } from "express";
import moviesRouter from "./movies.routes.js";
import myListRouter from "./mylist.routes.js";
import likesRouter from "./likes.routes.js";

const router = Router();

router.use(moviesRouter);
router.use(myListRouter);
router.use(likesRouter);

export default router;