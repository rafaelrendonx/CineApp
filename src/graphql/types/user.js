import * as graphql from 'graphql';

export const UserType = new graphql.GraphQLObjectType({
    name: "Users",
    description: "Users in MongoDB",
    fields: () => ({
        _id: {
            type: graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        name: {
            type: graphql.GraphQLString
        },
        lastName: {
            type: graphql.GraphQLString
        },
        email: {
            type: graphql.GraphQLString
        },
        password: {
            type: graphql.GraphQLString
        },
        birthDate: {
            type: graphql.GraphQLString
        },
        phone: {
            type: graphql.GraphQLString
        },
        isPremium: {
            type: graphql.GraphQLBoolean
        }
    })
})

export const UserInputType = new graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Types of add Users",
    fields: () => ({
        name: {
            type: graphql.GraphQLString
        },
        lastName: {
            type: graphql.GraphQLString
        },
        email: {
            type: graphql.GraphQLString
        },
        password: {
            type: graphql.GraphQLString
        },
        birthDate: {
            type: graphql.GraphQLString
        },
        phone: {
            type: graphql.GraphQLString
        },
        isPremium: {
            type: graphql.GraphQLBoolean
        }
    })
})