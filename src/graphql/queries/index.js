import users from './users';
import genres from './genres';
import movies from './movies';
import ratings from './ratings';

export default{
    ...users,
    ...genres,
    ...movies,
    ...ratings
}