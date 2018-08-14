import * as graphql from 'graphql';

import Rating from '../../../schemas/ratings';
import { RatingType } from '../../types/ratings';

const querySingleRating = {
    type: RatingType,
    args:{
        id:{
            name: 'ID',
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const rating = Rating.findById(params.id).exec()
        return rating
    }
}

export default querySingleRating;