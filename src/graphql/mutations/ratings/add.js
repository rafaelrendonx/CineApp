import { GraphQLNonNull } from 'graphql';
import { RatingType, RatingInputType } from '../../types/ratings';

import RatingSchema from '../../../schemas/ratings';

export default {
    type: RatingType,
    args:{
        data:{
            name:'data',
            type: new GraphQLNonNull(RatingInputType)
        }
    },
    resolve (root, params){
        const Rating = new RatingSchema(params.data)
        const newRating = Rating.save();
        if (!newRating) {
            throw new Error("Error at creating rating")
        }
        return newRating
    }
}