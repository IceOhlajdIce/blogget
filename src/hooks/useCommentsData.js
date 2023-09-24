import {useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
import {commentsRequestAsync} from '../store/comments/action';

export const useCommentsData = (id) => {
  const token = useSelector(state => state.tokenReducer.token);
  const post = useSelector(state => state.commentsReducer.post);
  const comments = useSelector(state => state.commentsReducer.comments);
  const status = useSelector(state => state.commentsReducer.status);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(commentsRequestAsync(id));
  }, [token]);

  return [post, comments, status];
};
