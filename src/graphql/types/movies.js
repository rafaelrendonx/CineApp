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
            type: graphql.GraphQLString
        },
        rating:{
            type: RatingType,
            resolve(movie){
                const { rating } = movie
                return Rating.findById(rating).exec()
            }
        },
        genre:{
            type: GenreType,
            resolve(movie){
                const { genre } = movie
                return Genre.findById(genre).exec()
            }
        },
        rank: {
            type: graphql.GraphQLList(graphql.GraphQLFloat)
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
        },
        language: {
            type: graphql.GraphQLString
        },
        url : {
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
            type: graphql.GraphQLString
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
        },
        language: {
            type: graphql.GraphQLString
        },
        url : {
            type: graphql.GraphQLString
        }
    })
})

export const RankMovieType = new graphql.GraphQLInputObjectType({
    name: "addRank",
    description: "Add Rank to Movie",
    fields: () => ({
        rank:{
            type:graphql.GraphQLFloat
        }
    })
})