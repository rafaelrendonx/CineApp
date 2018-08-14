import Rating from '../../../schemas/ratings';
import { RatingType, RatingInputType } from '../../types/ratings';
import * as graphql from 'graphql';

export default {
    type: RatingType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(RatingInputType)
        }
    },
    resolve (root, params){
        const rating = new Rating(params.data)
        const newRating = rating.save();
        if (!newRating) throw new Error("Error at creating rating")
        return newRating
    }
}