'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _graphql = require('graphql');

var graphql = _interopRequireWildcard(_graphql);

var _users = require('../../../schemas/users');

var _users2 = _interopRequireDefault(_users);

var _user = require('../../types/user');

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

var queryAllUSers = {
    type: new graphql.GraphQLList(_user.UserType),
    resolve: function resolve() {
        var users = _users2.default.find().exec();
        if (!users) throw new Error("Error at fetching users");
        return users;
    }
};

exports.default = queryAllUSers;