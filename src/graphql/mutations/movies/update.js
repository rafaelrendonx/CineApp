import Movie from '../../../schemas/genres';
import { MovieType, MovieInputType } from '../../types/movies';
import * as graphql from 'graphql'

export default{
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data:{
            name:'data',
            type: new graq.GraphQLNonNull(MovieInputType)
        }
    },
    resolve(root, params){
        return Movie.findByIdAndUpdate(params.id,{$set:{...params.data}})
                         .then((movie) => Movie.findById(movie.id).exec())
                         .catch((err) => new Error("Coulnd't update Movie dara", err))
    }
}