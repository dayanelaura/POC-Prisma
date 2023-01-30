import prisma from "../database/database.js";
import { NewVote, Vote } from "../protocols/like.js";

export function getLikedMoviesOfMyList(){
    return prisma.likes.findMany();
}
//ajeitar a amostragem do array unindo com a tabela dos filmes

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

export function findMyVotes(movie_id: number){
    return prisma.likes.findMany({
        where: {
            movie_id,
        },
    })
}