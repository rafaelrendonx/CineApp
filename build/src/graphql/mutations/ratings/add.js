'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var _ratings = require('../../types/ratings');

var _ratings2 = require('../../../schemas/ratings');

var _ratings3 = _interopRequireDefault(_ratings2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    type: _ratings.RatingType,
    args: {
        data: {
            name: 'data',
            type: new _graphql.GraphQLNonNull(_ratings.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        var Rating = new _ratings3.default(params.data);
        var newRating = Rating.save();
        if (!newRating) {
            throw new Error("Error at creating rating");
        }
        return newRating;
    }
};