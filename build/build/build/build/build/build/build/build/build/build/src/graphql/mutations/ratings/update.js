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

var _ratings = require('../../../schemas/ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _ratings3 = require('../../types/ratings');

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
    type: _ratings3.RatingType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        },
        data: {
            name: 'data',
            type: new grapql.GraphQLNonNull(_ratings3.RatingInputType)
        }
    },
    resolve: function resolve(root, params) {
        return _ratings2.default.findByIdAndUpdate(params.id, { $set: _extends({}, params.data) }).then(function (rating) {
            return _ratings2.default.findById(_ratings2.default.id).exec();
        }).catch(function (err) {
            return new Error("Couldn't update Rating data", err);
        });
    }
};