import prisma from "../database/database.js";
import { NewVote, Vote } from "../protocols/like.js";

export function getLikedMoviesOfMyList(){
    return prisma.likes.findMany({
        include: {
            mylist: {
                include: {
                    movies: {
                        select: {
                            title: true,
                            description: true,
                            duration: true,
                        },
                    },
                },
            },
        },
    });
}

export function findMyVotes(movie_id: number){
    return prisma.likes.findMany({
        where: {
            movie_id,
        },
    })
}

export function upsertVote(vote: NewVote){
    return prisma.likes.upsert({
        create: vote as Vote,
        update: {
            rating: vote.rating,
        },
        where: {
            id: vote.id || 0,
        },
    });
}