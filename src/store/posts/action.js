import {URL_API} from '../../api/const';
import axios from 'axios';
import {createAsyncThunk} from '@reduxjs/toolkit';

export const postsRequestAsync = createAsyncThunk(
  'posts/fetch',
  (newPage, {getState}) => {
    let page = getState().postsReducer.page;

    if (newPage) {
      page = newPage;
    }

    const token = getState().tokenReducer.token;
    const after = getState().postsReducer.after;
    const isLast = getState().postsReducer.isLast;

    if (!token || isLast) return;

    return axios(`${URL_API}/${page}?limit=10&${after ? `after=${after}` : ''}`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(({data}) => {
        if (after) {
          return {data: data.data.children, after: data.data.after};
        } else {
          return {data: data.data.children, after: data.data.after};
        }
      })
      .catch((error) => ({error: error.toString()}));
  },
);
