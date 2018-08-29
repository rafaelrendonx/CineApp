import genres from './genres';
import ratings from './ratings';
import movies from './movies';
import users from './users';

export default {
    ...genres,
    ...ratings,
    ...movies,
    ...users
}