'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _create = require('./create');

var _create2 = _interopRequireDefault(_create);

var _verify = require('./verify');

var _verify2 = _interopRequireDefault(_verify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    createToken: _create2.default,
    verifyToken: _verify2.default
};