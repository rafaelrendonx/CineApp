import User from '../../../schemas/users';
import { UserType } from '../../types/user';
import * as graphql from 'graphql';

export default {

    type: UserType,
    args: {
        id: {
            name: 'ID',
            type: new graphql.GraphQLNonNull(graphql.GraphQLID)
        }
    },
    resolve(root, params){
        const deletedUser = User.findByIdAndRemove(params.id).exec()
        if (!deletedUser) throw Error ("Error on delete User")
        return deletedUser
    }
}