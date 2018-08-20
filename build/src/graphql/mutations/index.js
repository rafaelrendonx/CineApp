'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _genres = require('./genres');

var _genres2 = _interopRequireDefault(_genres);

var _ratings = require('./ratings');

var _ratings2 = _interopRequireDefault(_ratings);

var _movies = require('./movies');

var _movies2 = _interopRequireDefault(_movies);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _extends({}, _genres2.default, _ratings2.default, _movies2.default);