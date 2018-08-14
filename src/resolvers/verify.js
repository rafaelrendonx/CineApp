import User from '../schemas/users';
import jwt from 'jsonwebtoken';

const secret = 'sample2018' // SECRET KEY
const prefixToken = 'JWT';

export const verifyToken = (token) => {
    const [prefix,payload] = token.split(' ')

    let user = null
    if(!payload){
        throw new Error('No TOKEN provided') //NO TOKEN IN HEADER
    }
    if(prefix !== prefixToken){ // NO HEADER or INVALID
        throw new Error('Invalid HEADER format')
    }
    jwt.verify(payload,secret,(err,data) =>{
        if(err){
            throw new Error('INVALID TOKEN') // INVALID TOKEN
        }else{
            user = User.findOne({'_id':data.id}).exec()
                .then(res => {
                    return resolve(res);
                })
                .catch(err => {
                    return reject(err);
                })
        }
    })
    if(!user) {
        throw new Error('User doesnt exist in Database')
    }
}

/*export const verifyToken = async(token) => {
    return new Promise((resolve, reject) => {
        const [prefix, payload] = token.split (' ');

        if (!payload) return reject('No token provided');
        if(prefix !== prefixToken) return reject('Invalid Header Format');

        jwt.verify(payload, secret, (err, data) => {
            if(err){
                return reject(err);
            }
            User.findOne({'_id':data.id}).exec()
            .then(res => {
                return resolve(res);
            })
            .catch(err => {
                return reject(err);
            })
        })
    })
}*/