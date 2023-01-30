import prisma from "../database/database.js";
import { Movie, MovieEntity } from "../protocols/movie.js";

export function insertMovie(movie: Movie){
        const { title, description, duration, created_at} = movie;
        return prisma.movies.create({
                data: {
                        title,
                        description,
                        duration,
                        created_at
                }
        });
}

export function showAllMovies(){
        return prisma.movies.findMany();
}

export function findMovieById(id: number){
        return prisma.movies.findUnique({
                where: {
                        id: id
                }
        });
}