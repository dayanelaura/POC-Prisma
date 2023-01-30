export type MylistEntity = {
    id: number,
    movie_id: number,
    status?: string,
    created_at?: string
}

export type Mylist = Omit<MylistEntity, "id">