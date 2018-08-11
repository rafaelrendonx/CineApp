import mongoose from 'mongoose';
import Genres from './genres';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    'name':{
        type: String,
        require: true
    },
    'genre':{
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Genres'
    },
    'synopsis':{
        type: String,
        require: true
    },
    'cast':{
        type: String,
        require: true
    },
    'year':{
        type: Date,
        require: true
    },
    'lenght':{
        type: String,
        require: true
    },
},{'collection' : 'movies', timestamps : true});

export default mongoose.model('movies', MovieSchema)