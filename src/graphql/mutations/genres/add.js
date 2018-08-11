import Genre from '../../../schemas/genres';
import { GenreType, GenreInputType } from '../../types/genres';
import * as graphql from 'graphql';
import { networkInterfaces } from 'os';

export default {
    type: GenreType,
    args:{
        data:{
            name:'data',
            type: new graphql.GraphQLNonNull(GenreInputType)
        }
    },
    resolve (root, params){
        const genre = new Genre(params.data)
        const newGenre = genre.save();
        if(!newGenre) throw new Error("Error at creating genre")
        return newGenre
    }
}