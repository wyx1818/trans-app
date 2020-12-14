import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AuthSessionState {
  server: string;
  user: string;
  authToken: string;
  error: string | null;
  loading: boolean;
}

const initialAuthState: AuthSessionState = {
  server: '',
  user: '',
  authToken: '',
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    startFetch(state) {
      state.loading = true;
      state.error = null;
    },
    catchError(state, action: PayloadAction<{ error: string }>) {
      state.loading = false;
      state.error = action.payload.error;
    },
    loginFetch(state, action: PayloadAction<{ authToken: string }>) {
      state.loading = false;
      state.error = null;
      state.authToken = action.payload.authToken;
    },
  },
});

const { actions, reducer: authReducer } = authSlice;

export { actions as AuthActions };
export default authReducer;
