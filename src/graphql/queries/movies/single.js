import * as graphql from 'graphql';

import Movie from '../../../schemas/movies';
import { MovieType } from '../../types/movies';

const querySingleMovie = {
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const movie = Movie.findById(params.id).exec()
        return movie
    }
}

export default querySingleMovie;