import { Request, Response } from "express";
import { Movie } from "../protocols/movie.js";
import dayjs from "dayjs";
import { movieSchema } from "../models/movieSchema.js";
import { insertMovie, showAllMovies } from "../repositories/movie-repository.js";

export async function addMovie(req: Request, res: Response){
    try{
        const movie = req.body as Movie;

        const { error } = movieSchema.validate(movie, { abortEarly: false });
        if(error){
            const errors = error.details;
            const errorsTXT = errors.map(detail => detail.message);
            return res.status(400).send(errorsTXT);
        }

        const { title, description, duration } = movie;
        const movieObject = {
            title,
            description,
            duration,
            created_at: dayjs().format('YYYY-MM-DD')
        } as Movie;
        
        await insertMovie(movieObject);

        return res.status(201).send(movieObject);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function getAllMovies(req: Request, res: Response){
    try{        
        const movies = await showAllMovies();
        return res.status(200).send(movies);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}