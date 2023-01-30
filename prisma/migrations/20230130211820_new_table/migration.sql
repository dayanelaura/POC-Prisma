-- CreateTable
CREATE TABLE "movies" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "duration" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "movies_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "mylist" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "mylist_pk" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "likes" (
    "id" SERIAL NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "rating" TEXT NOT NULL,
    "created_at" TEXT NOT NULL,

    CONSTRAINT "likes_pk" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "mylist_movie_id_key" ON "mylist"("movie_id");

-- AddForeignKey
ALTER TABLE "mylist" ADD CONSTRAINT "mylist_fk0" FOREIGN KEY ("movie_id") REFERENCES "movies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "likes" ADD CONSTRAINT "likes_fk0" FOREIGN KEY ("movie_id") REFERENCES "mylist"("movie_id") ON DELETE NO ACTION ON UPDATE NO ACTION;
