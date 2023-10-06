import {tokenMiddleware, tokenReducer} from './tokenReducer';
import {commentReducer} from './commentReducer';
import {authReducer} from './auth/authReducer';
import commentsReducer from './comments/commentsSlice';
import postsReducer from './posts/postsSlice';
import {configureStore} from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    tokenReducer,
    commentReducer,
    authReducer,
    postsReducer,
    commentsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tokenMiddleware),
});
