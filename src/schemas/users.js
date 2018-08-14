import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const SALT_WORK_FACTOR = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    'name':{
        type: String,
        require: true
    },
    'lastName':{
        type: String,
        require: true
    },
    'email':{
        type: String,
        require: true
    },
    'password':{
        type: String,
        require:true
    },
    'birthDate':{
        type: Date,
        require: false
    },
    'phone':{
        type: String,
        require: true
    },
    'isPremium': {
        type: Boolean,
        default: false,
        require: false
    },
}, {'collection' : 'users', timestamps : true});

UserSchema.pre('save', function(next){
    var user = this
// Si el usuario modifica la contraseña o crea una nueva
    if(!user.isModified('password')) return next();
    //generamos salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
        if(err) return next(err);

        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            user.password = hash;
            next();
        })
    })


})

export default mongoose.model('users', UserSchema);
