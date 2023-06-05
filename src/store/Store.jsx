import { configureStore } from '@reduxjs/toolkit';
import postsSlice from '../feature/AllSlices/PostSlice';
import userReducer from '../feature/AllSlices/UserSlice';

export const store = configureStore({
  reducer: {
    posts: postsSlice,
    users: userReducer,
  },
});
