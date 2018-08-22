import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    'image':{
        type: String,
        require: true
    },
    'name':{
        type: String,
        require: true
    },
    'year':{
        type: String,
        require: true
    },
    'rating':{
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'rating'
    },
    'genre':{
        type: Schema.Types.ObjectId,
        require: true,
        ref: 'genre'
    },
    'rank':{
        type: [Number],
        require: true
    },
    'synopsis':{
        type: String,
        require: true
    },
    'director':{
        type: String,
        require: true
    },
    'cast':{
        type: String,
        require: true
    },
    'duration':{
        type: String,
        require: true
    },
},{'collection' : 'movies', timestamps : true});

export default mongoose.model('movies', MovieSchema)