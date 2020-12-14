import { combineReducers } from '@reduxjs/toolkit';
import authReducer from 'app/modules/Auth/_redux/authSlice';

const rootReducer = combineReducers({
  auth: authReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
