import { SIGN_UP } from '../type';
import * as api from '../api';

export const signUpUser = ( users ) => async dispatch => {
  try {
    const { data } = await api.signUpUser( users );
    dispatch( {
      type: SIGN_UP,
      payload: data
    } );
    console.log(data);
  } catch ( error ) {
    console.log( error );
  }
};

export const signInUser = () => {
  console.log('users');
};
