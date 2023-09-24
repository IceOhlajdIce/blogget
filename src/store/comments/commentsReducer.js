import {
  COMMENTS_REQUEST,
  COMMENTS_REQUEST_ERROR,
  COMMENTS_REQUEST_SUCCESS
} from './action';

const initialState = {
  post: {},
  comments: {},
  status: 'loading',
  error: '',
};

export const commentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMENTS_REQUEST:
      return {
        ...state,
        status: 'loading',
        error: '',
      };
    case COMMENTS_REQUEST_SUCCESS:
      return {
        ...state,
        status: 'loaded',
        post: action.post,
        comments: action.comments,
        error: '',
      };
    case COMMENTS_REQUEST_ERROR:
      return {
        ...state,
        status: 'error',
        error: action.error,
      };
    default:
      return state;
  }
};