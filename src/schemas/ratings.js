import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const RatingSchema = new Schema({
    'name':{
        type: String,
        require: true
    },
    'description':{
        type: String,
        require: true
    },
}, {'collection' : 'ratings', timestamps : true});

export default mongoose.model('ratings', RatingSchema)