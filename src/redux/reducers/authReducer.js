import { SIGN_UP } from '../type';

const users = ( user = [], action ) => {
  switch ( action.payload ) {
    case SIGN_UP:
      return [ action.payload, ...user ];
    default:
      return user;
  }
};

export default users;
