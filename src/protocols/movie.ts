export type MovieEntity = {
    id: number,
    title: string,
    description: string,
    duration: string,
    created_at?: string
}

export type Movie = Omit<MovieEntity, "id">

export type MovieLiked = {
    movie_id: number,
    title: string,
    description: string,
    duration: string,
    rating: string,
    status: string
}