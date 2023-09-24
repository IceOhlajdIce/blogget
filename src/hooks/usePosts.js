import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/action';

export const usePosts = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const data = useSelector(state => state.postsReducer.data);
  const loading = useSelector(state => state.postsReducer.loading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync());
  }, [token]);

  return [data, loading];
};
