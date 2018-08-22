'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _add = require('/add');

var _add2 = _interopRequireDefault(_add);

var _update = require('./update');

var _update2 = _interopRequireDefault(_update);

var _delete = require('./delete');

var _delete2 = _interopRequireDefault(_delete);

var _addRank = require('./addRank');

var _addRank2 = _interopRequireDefault(_addRank);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

exports.default = {
    addMovie: _add2.default,
    UpdateMovie: _update2.default,
    deleteMovie: _delete2.default,
    addRank: _addRank2.default
};