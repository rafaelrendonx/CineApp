import * as graphql from 'graphql';
import { GenreType } from './genres';
import Genre from '../../schemas/genres';
import { RatingType } from './ratings';
import Rating from '../../schemas/ratings';

export const MovieType = new graphql.GraphQLObjectType({
    name: "Movies",
    description: "Movies in MongoDB",
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        image:{
            type: graphql.GraphQLString
        },
        name:{
            type: graphql.GraphQLString
        },
        year:{
            type: graphql.GraphQLInt
        },
        rating:{
            type: RatingType,
            resolve(rating){
                const {rating} = movie
                return Rating.findbyiD(rating).exec()
            }
        },
        genre:{
            type: GenreType,
            resolve(genre){
                const {genre} = movie
                return Genre.findbyiD(genre).exec()
            }
        },
        synopsis:{
            type: graphql.GraphQLString
        },
        director:{
            type: graphql.GraphQLString
        },
        cast:{
            type: graphql.GraphQLString
        },
        duration:{
            type: graphql.GraphQLString
        }
    })
})

export const MovieInputType = new graphql.GraphQLInputObjectType({
    name: 'AddMovies',
    fields: () => ({
        image:{
            type: graphql.GraphQLString
        },
        name:{
            type: graphql.GraphQLString
        },
        year:{
            type: graphql.GraphQLInt
        },
        rating:{
            type: graphql.GraphQLString
        },
        genre:{
            type: graphql.GraphQLString
        },
        synopsis:{
            type: graphql.GraphQLString
        },
        director:{
            type: graphql.GraphQLString
        },
        cast:{
            type: graphql.GraphQLString
        },
        duration:{
            type: graphql.GraphQLString
        }
    })
})