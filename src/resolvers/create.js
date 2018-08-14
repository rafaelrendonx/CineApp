import jwt from 'jsonwebtoken';
import User from '../schemas/users';
import bcrypt from 'bcrypt';

const expiresIn = '1d'; //Tiempo de expiración
const secret = 'sample2018' //Secret Key

/** 
* Use email as login, use password as password
* @param {string} email
* @param {string} password
*/

export const createToken = (email,password) => {
    if(!email || !password){ //Checar si vienen credenciales
        return false
    }

    const user = User.findOne({'email' : email}).then((user) => {
        const compare = new Promise((resolve, reject) => {
            bcrypt.compare(password, user.password, function(err, res){
                if(res){
                    const payload = {
                        email : user.email,
                        id: user._id
                    }

                    const token = jwt.sign(payload, secret, {
                        expiresIn
                    })
                    resolve(token)
                }
                else{
                    reject(false)
                }
            })
        })
        return compare
    }).catch()
    return user
}
