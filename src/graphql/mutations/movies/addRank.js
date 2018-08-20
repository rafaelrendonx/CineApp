import * as graphql from 'graphql';
import Movie from '../../../schemas/movies';
import { MovieType, RankMovieType } from '../../types/movies';

export default {
    type: MovieType,
    args : {
        id: {
            mame: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: "data",
            type: graphql.GraphQLNonNull(RankMovieType)
        }
    }, resolve (root, params){
        const {id, data} = params
        return Movie.findByIdAndUpdate(id, {$push:{rank:data.rank}})
            .then((movie) => {
                return Movie.findById(movie.id),exec()
            })
    }
}