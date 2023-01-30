import { Request, Response } from "express";
import dayjs from "dayjs";
import { findMovieInMyList } from "../repositories/mylist-repository.js";
import { Vote } from "../protocols/like.js";
import { getLikedMoviesOfMyList, upsertVote } from "../repositories/likes-repository.js";

export async function showLikedMovies(req: Request, res: Response){
    try{        
        const movies = await getLikedMoviesOfMyList();
        return res.status(200).send(movies);
    }catch(err){
        console.log(err);
        res.send(err);
    }
}

export async function likeOrDislike(req: Request, res: Response){
    const { id } = req.params;
    const idNumber = Number(id);

    const mylistDB = await findMovieInMyList(idNumber);
        if (!mylistDB)
            return res.sendStatus(404);

    const voteObject = {
        movie_id: idNumber,
        rating: 'disliked',
        created_at: dayjs().format('YYYY-MM-DD')
    } as Vote;

    await upsertVote(voteObject);
    return res.status(201).send(voteObject);
}