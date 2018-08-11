import * as graphql from 'graphql';
import queries from './queries';
import mutations from './mutations';

export default new graphql.GraphQLSchema({
    query: new graphql.GraphQLObjectType({
        name: 'Query',
        fields: queries
    }),
    mutation: new graphql.GraphQLObjectType({
        name: 'Mutation',
        fields: mutations
    })
})