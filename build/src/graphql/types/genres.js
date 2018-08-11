"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.GenreInputType = exports.GenreType = undefined;

var _graphql = require("graphql");

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var GenreType = exports.GenreType = new graphql.GraphQLObjectType({
    name: "Genres",
    description: "Genres in MongoDB",
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            name: {
                type: graphql.GraphQLString
            },
            description: {
                type: graphql.GraphQLString
            }
        };
    }
});

var GenreInputType = exports.GenreInputType = new graphql.GraphQLInputObjectType({
    name: "AddGenres",
    fields: function fields() {
        return {
            name: {
                type: graphql.GraphQLString
            },
            description: {
                type: graphql.GraphQLString
            }
        };
    }
});