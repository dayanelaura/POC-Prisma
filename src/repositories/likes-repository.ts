import prisma from "../database/database.js";
import { NewVote, Vote } from "../protocols/like.js";

export function getLikedMoviesOfMyList(){
    return prisma.likes.findMany();
}

export function upsertVote(vote: NewVote){
    return prisma.likes.upsert({
        create: vote as Vote,
        update: vote,
        where: {
            id: vote.id || 0,
        },
    });
}