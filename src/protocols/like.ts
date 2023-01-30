export type VoteEntity = {
    id: number,
    movie_id: number,
    rating: string,
    created_at: string
}

export type Vote = Omit<VoteEntity, "id">

export type NewVote = Partial<VoteEntity>