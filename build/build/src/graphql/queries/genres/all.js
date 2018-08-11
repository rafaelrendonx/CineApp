'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _genres = require('../../../schemas/genres');

var _genres2 = _interopRequireDefault(_genres);

var _genres3 = require('../../types/genres');

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

var queryAllGenres = {
    type: new graphql.GraphQLList(_genres3.GenreType),
    resolve: function resolve() {
        var genres = _genres2.default.find().exec();
        if (!genres) throw new Error("Error at fetching genres");
        return genres;
    }
};

exports.default = queryAllGenres;