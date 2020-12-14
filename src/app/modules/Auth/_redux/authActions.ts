import { AppThunk } from 'redux/store';
import * as authFromServer from './authCrud';
import { AuthActions, AuthSessionState } from './authSlice';

// eslint-disable-next-line import/prefer-default-export
export const fetchLogin = (auth: AuthSessionState): AppThunk => (dispatch) => {
  dispatch(AuthActions.startFetch());
  return authFromServer
    .login({ username: auth.user, password: '12342' })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      dispatch(AuthActions.catchError({ error }));
    });
};
