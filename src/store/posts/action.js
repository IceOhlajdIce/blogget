import {URL_API} from '../../api/const';
import axios from 'axios';

export const POSTS_REQUEST = 'POSTS_REQUEST';
export const POSTS_REQUEST_SUCCESS = 'POSTS_REQUEST_SUCCESS';
export const POSTS_REQUEST_ERROR = 'POSTS_REQUEST_ERROR';

export const postshRequest = () => ({
  type: POSTS_REQUEST,
});

export const postshRequestSuccess = (data) => ({
  type: POSTS_REQUEST_SUCCESS,
  data,
});

export const postshRequestError = (error) => ({
  type: POSTS_REQUEST_ERROR,
  error,
});

export const postsRequestAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token;
  if (!token) return;
  const res = [];

  dispatch(postshRequest());

  axios(`${URL_API}/best`, {
    headers: {
      Authorization: `bearer ${token}`,
    },
  })
    .then(({data}) => {
      const postsData = data.data.children;
      postsData.forEach((element) => {
        const img = element.data.thumbnail.replace(/\?.*$/, '');
        const postData = {
          thumbnail: img.startsWith('https:') ? img : '',
          title: element.data.title,
          author: element.data.author,
          ups: element.data.ups,
          date: element.data.created,
          id: element.data.id,
        };
        res.push(postData);
      });
      dispatch(postshRequestSuccess(res));
    })
    .catch((err) => {
      dispatch(postshRequestError(err.message));
    });
};
