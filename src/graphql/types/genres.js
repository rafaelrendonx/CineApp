import * as graphql from 'graphql';

export const GenreType = new graphql.GraphQLObjectType({
    name: "Genres",
    description: "Genres in MongoDB",
    fields:() => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        }
    }) 
})

export const GenreInputType = new graphql.GraphQLInputObjectType({
    name: "AddGenres",
    fields: () => ({
        name: {
            type: graphql.GraphQLString
        },
        description: {
            type: graphql.GraphQLString
        }
    })
})