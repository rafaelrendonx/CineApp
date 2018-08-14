import * as graphql from 'graphql';

import Movie from '../../../schemas/movies';
import { MovieType } from '../../types/movies';

const queryAllMovies = {
    type: new graphql.GraphQLList(MovieType),
    resolve(){
        const movies = Movie.find().exec()
        if(!movies) throw new Error("Error at fetching movies")
        return movies 
    }
}

export default queryAllMovies;