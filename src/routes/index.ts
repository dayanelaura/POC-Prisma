import { Router } from "express";

import moviesRouter from "./movies.routes.js";
import myListRouter from "./mylist.routes.js";

const router = Router();

router.use(moviesRouter);
router.use(myListRouter);

export default router;