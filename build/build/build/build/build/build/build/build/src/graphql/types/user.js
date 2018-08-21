"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UserInputType = exports.UserType = undefined;

var _graphql = require("graphql");

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

var UserType = exports.UserType = new graphql.GraphQLObjectType({
    name: "Users",
    description: "Users in MongoDB",
    fields: function fields() {
        return {
            _id: {
                type: graphql.GraphQLNonNull(graphql.GraphQLID)
            },
            name: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            password: {
                type: graphql.GraphQLString
            },
            birthDate: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },
            isPremium: {
                type: graphql.GraphQLBoolean
            }
        };
    }
});

var UserInputType = exports.UserInputType = new graphql.GraphQLInputObjectType({
    name: "AddUsers",
    description: "Types of add Users",
    fields: function fields() {
        return {
            name: {
                type: graphql.GraphQLString
            },
            lastName: {
                type: graphql.GraphQLString
            },
            email: {
                type: graphql.GraphQLString
            },
            password: {
                type: graphql.GraphQLString
            },
            birthDate: {
                type: graphql.GraphQLString
            },
            phone: {
                type: graphql.GraphQLString
            },
            isPremium: {
                type: graphql.GraphQLBoolean
            }
        };
    }
});