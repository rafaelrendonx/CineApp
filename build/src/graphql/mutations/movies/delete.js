'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _movies = require('../../../schemas/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _movies3.MovieType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve: function resolve(root, params) {
        var deletedMovie = _movies2.default.findByIdAndRemove(params.id).exec();
        if (!deletedMovie) throw Error("Error on delete");
        return deletedMovie;
    }
};