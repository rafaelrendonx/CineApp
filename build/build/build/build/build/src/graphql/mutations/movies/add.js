'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _genres = require('../../../schemas/genres');

var _genres2 = _interopRequireDefault(_genres);

var _movies = require('../../types/movies');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

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

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    type: _movies.MovieType,
    args: {
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_movies.MovieInputType)
        }
    },
    resolve: function resolve(root, params) {
        var movie = new _genres2.default(params.data);
        var newMovie = movie.save();
        if (!newMovie) throw new Error("Error at creating movie");
        return newMovie;
    }
};