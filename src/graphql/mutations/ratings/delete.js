import Rating from '../../../schemas/ratings';
import { RatingType } from '../../types/ratings';
import * as graphql from 'graphql';

export default {
    type: RatingType,
    args:{
        id:{
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const deletedRating = Rating.findByIdAndRemove(params.id).exec()
        if (!deletedRating){
             throw Error("Error on delete")
        }
        return deletedRating
    }
}