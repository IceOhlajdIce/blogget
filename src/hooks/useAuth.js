import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/tokenReducer';
import {
  authLogout, authRequestAsync,
} from '../store/auth/action';

export const useAuth = () => {
  const token = useSelector(state => state.tokenReducer.token);
  const auth = useSelector(state => state.authReducer.data);
  const loading = useSelector(state => state.authReducer.loading);

  const dispatch = useDispatch();

  const clearAuth = () => {
    dispatch(deleteToken());
    dispatch(authLogout());
    location.href = '/';
  };

  useEffect(() => {
    dispatch(authRequestAsync());
  }, [token]);

  return [auth, loading, clearAuth];
};
