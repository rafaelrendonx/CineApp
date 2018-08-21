'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RankMovieType = exports.MovieInputType = exports.MovieType = undefined;

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _genres = require('./genres');

var _genres2 = require('../../schemas/genres');

var _genres3 = _interopRequireDefault(_genres2);

var _ratings = require('./ratings');

var _ratings2 = require('../../schemas/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
        return obj;
    } else {
        var newObj = {};if (obj != null) {
            for (var key in obj) {
                if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key];
            }
        }newObj.default = obj;return newObj;
    }
}

var MovieType = exports.MovieType = new graphql.GraphQLObjectType({
    name: "Movies",
    description: "Movies in MongoDB",
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            image: {
                type: graphql.GraphQLString
            },
            name: {
                type: graphql.GraphQLString
            },
            year: {
                type: graphql.GraphQLString
            },
            rating: {
                type: _ratings.RatingType,
                resolve: function resolve(movie) {
                    var rating = movie.rating;

                    return _ratings3.default.findbyiD(rating).exec();
                }
            },
            genre: {
                type: _genres.GenreType,
                resolve: function resolve(movie) {
                    var genre = movie.genre;

                    return _genres3.default.findbyiD(genre).exec();
                }
            },
            rank: {
                type: graphql.GraphQLList(graphql.GraphQLFloat)
            },
            synopsis: {
                type: graphql.GraphQLString
            },
            director: {
                type: graphql.GraphQLString
            },
            cast: {
                type: graphql.GraphQLString
            },
            duration: {
                type: graphql.GraphQLString
            }
        };
    }
});

var MovieInputType = exports.MovieInputType = new graphql.GraphQLInputObjectType({
    name: 'AddMovies',
    fields: function fields() {
        return {
            image: {
                type: graphql.GraphQLString
            },
            name: {
                type: graphql.GraphQLString
            },
            year: {
                type: graphql.GraphQLString
            },
            rating: {
                type: graphql.GraphQLString
            },
            genre: {
                type: graphql.GraphQLString
            },
            synopsis: {
                type: graphql.GraphQLString
            },
            director: {
                type: graphql.GraphQLString
            },
            cast: {
                type: graphql.GraphQLString
            },
            duration: {
                type: graphql.GraphQLString
            }
        };
    }
});

var RankMovieType = exports.RankMovieType = new graphql.GraphQLInputObjectType({
    name: "addRank",
    description: "Add Rank to Movie",
    fields: function fields() {
        return {
            rank: {
                type: graphql.GraphQLFloat
            }
        };
    }
});