import prisma from "../database/database.js";
import { Mylist, MylistEntity } from "../protocols/mylist.js";

export function showMoviesInMyList(){
    return prisma.mylist.findMany({
        include: {
            movies: {
                select: {
                    title: true,
                    description: true,
                    duration: true,
                },
            },
        },
    });
}

export function findMovieInMyList(id: number){
    return prisma.mylist.findUnique({
        where: { 
            movie_id: id,
        }
    });
}

export function insertMovieInMyList(mylistObject: Mylist){
    const { movie_id, status, created_at } = mylistObject;
    return prisma.mylist.create({
        data: {
            movie_id,
            status,
            created_at,
        }
    });
}

export function updateMovieStatus(id: number){
    return prisma.mylist.update({
        data: {
            status: "watched",
        },
        where: {
            movie_id: id,
        },
    });
}

export function deleteMovieOfMyListById(id: number){
    return prisma.mylist.delete({
        where: {
            movie_id: id,
        }
    })
}