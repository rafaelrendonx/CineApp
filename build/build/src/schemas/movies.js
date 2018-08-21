'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
}

var Schema = _mongoose2.default.Schema;

var MovieSchema = new Schema({
    'image': {
        type: String,
        require: true
    },
    'name': {
        type: String,
        require: true
    },
    'year': {
        type: Date,
        require: true
    },
    'rating': {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Ratings'
    },
    'genre': {
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'Genres'
    },
    'rank': {
        type: [Number],
        require: true
    },
    'synopsis': {
        type: String,
        require: true
    },
    'director': {
        type: String,
        require: true
    },
    'cast': {
        type: String,
        require: true
    },
    'duration': {
        type: String,
        require: true
    }
}, { 'collection': 'movies', timestamps: true });

exports.default = _mongoose2.default.model('movies', MovieSchema);