'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }return target;
};

var _movies = require('../../../schemas/movies');

var _movies2 = _interopRequireDefault(_movies);

var _movies3 = require('../../types/movies');

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
    type: _movies3.MovieType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new graphql.GraphQLNonNull(_movies3.MovieInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _movies2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (movie) {
            return _movies2.default.findById(movie.id).exec();
        }).catch(function (err) {
            return new Error("Coulnd't update Movie data", err);
        });
    }
};