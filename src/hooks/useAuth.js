import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/store';

export const useAuth = () => {
  const [auth, setAuth] = useState({});
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const clearAuth = () => {
    setAuth({});
    dispatch(deleteToken());
    location.href = '/';
  };

  useEffect(() => {
    if (!token) return;

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({name, icon_img: iconImg}) => {
        const img = iconImg.replace(/\?.*$/, '');
        setAuth({name, img});
      })
      .catch((err) => {
        if (err.message === '401') {
          clearAuth();
        }
      });
  }, [token]);

  return [auth, clearAuth];
};
