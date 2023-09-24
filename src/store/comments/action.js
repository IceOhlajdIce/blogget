import {URL_API} from '../../api/const';
import axios from 'axios';

export const COMMENTS_REQUEST = 'COMMENTS_REQUEST';
export const COMMENTS_REQUEST_SUCCESS = 'COMMENTS_REQUEST_SUCCESS';
export const COMMENTS_REQUEST_ERROR = 'COMMENTS_REQUEST_ERROR';

export const commentshRequest = () => ({
  type: COMMENTS_REQUEST,
});

export const commentshRequestSuccess = (post, comments) => ({
  type: COMMENTS_REQUEST_SUCCESS,
  post,
  comments,
});

export const commentshRequestError = (error) => ({
  type: COMMENTS_REQUEST_ERROR,
  error,
});

export const commentsRequestAsync = (id) => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;

  axios(`${URL_API}/comments/${id}`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const postData = data[0].data.children;
      const comments = data[1].data.children;
      // setPost(postData[0].data);
      // setComments(commentsData);
      const post = postData[0].data;
      dispatch(commentshRequestSuccess(post, comments));
    })
    .catch((err) => {
      dispatch(commentshRequestError(err.message));
    });
};
