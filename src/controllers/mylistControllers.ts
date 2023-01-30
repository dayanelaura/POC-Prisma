import { deleteMovieOfMyListById, findMovieInMyList, insertMovieInMyList, showMoviesInMyList, updateMovieStatus } from "../repositories/mylist-repository.js";
import { Request, Response } from "express";
import dayjs from "dayjs";
import { Mylist } from "../protocols/mylist.js";
import { mylistSchema } from "../models/mylistSchema.js";
import { findMovieById } from "../repositories/movie-repository.js";

export async function getMoviesInMyList(req: Request, res: Response){
    try{        
        const moviesInMyList = await showMoviesInMyList();
        return res.status(200).send(moviesInMyList);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function addMovieInMyList(req: Request, res: Response){
    try{
        const movie = req.body as Mylist;

        const { error } = mylistSchema.validate(movie, { abortEarly: false });
        if(error){
            const errors = error.details;
            const errorsTXT = errors.map(detail => detail.message);
            return res.status(400).send(errorsTXT);
        }

        const movieDB = await findMovieById(movie.movie_id);
        if (!movieDB)
            return res.sendStatus(404);

        const mylistDB = await findMovieInMyList(movie.movie_id);
        if (mylistDB)
            return res.sendStatus(409);

        const { movie_id } = movie;
        const mylistObject = {
            movie_id,
            status: 'unwatched',
            created_at: dayjs().format('YYYY-MM-DD')
        } as Mylist;
        
        await insertMovieInMyList(mylistObject);

        return res.status(201).send(mylistObject);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function markAsWatched(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = Number(id);

    const mylistDB = await findMovieInMyList(idNumber);
        if (!mylistDB)
            return res.sendStatus(404);

    await updateMovieStatus(idNumber);
    return res.sendStatus(200);
}

export async function deleteMovieOfMyList(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = Number(id);
    
    const mylistDB = await findMovieInMyList(idNumber);
        if (!mylistDB)
            return res.sendStatus(404);

    await deleteMovieOfMyListById(idNumber);
    return res.sendStatus(200);
}