'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _genres = require('../../../schemas/genres');

var _genres2 = _interopRequireDefault(_genres);

var _movies = require('../../types/movies');

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _movies.MovieType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graq.GraphQLNonNull(_movies.MovieInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _genres2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (movie) {
            return _genres2.default.findById(movie.id).exec();
        }).catch(function (err) {
            return new Error("Coulnd't update Movie dara", err);
        });
    }
};