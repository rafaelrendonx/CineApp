import Movie from '../../../schemas/movies';
import { MovieType } from '../../types/movies';
import * as graphql from 'graphql';

export default { 
    type: MovieType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const deletedMovie = Movie.findByIdAndRemove(params.id).exec()
        if(!deletedMovie) throw Error("Error on delete")
        return deletedMovie
    }
}