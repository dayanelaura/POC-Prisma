import joi from 'joi';
import { Movie } from '../protocols/movie';

export const movieSchema: joi.ObjectSchema<Movie> = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    duration: joi.string().required(),
    status: joi.string().valid('watched').valid('unwatched'),
    created_at: joi.string()
});