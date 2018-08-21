import RatingSchema from '../../../schemas/ratings';
import {RatingType, RatingInputType } from '../../types/ratings';
import { GraphQLNonNull, GraphQLID } from 'graphql';

export default{
    type: RatingType,
    args:{
        id:{
            name:'ID',
            type: new GraphQLNonNull(GraphQLID)
        },
        data:{
            name: 'data',
            type: new GraphQLNonNull(RatingInputType)
        }
    },
    resolve (root, params){
        return RatingSchema.findByIdAndUpdate(params.id,{$set:{...params.data}})
                          .then((data) =>  Rating.findById(data.id).exec())
                          .catch((err) => new Error("Couldn't update Rating data", err))
    }
}