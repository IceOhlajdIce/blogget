import {createSlice} from '@reduxjs/toolkit';
import {postsRequestAsync} from './action';

const initialState = {
  status: 'loading',
  data: [],
  error: '',
  after: '',
  isLast: false,
  page: '',
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    changePage: (state, action) => {
      state.page = action.payload;
      state.after = '';
      state.isLast = false;
      state.data = [];
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: (state) => {
      state.status = 'loading';
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.data = [...state.data, ...action.payload.data];
      state.after = action.payload.after;
      state.isLast = !action.payload.after;
      state.error = '';
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'loaded';
      state.error = action.error;
    },
  }
});

export const {changePage} = postsSlice.actions;

export default postsSlice.reducer;
