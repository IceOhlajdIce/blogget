import {useState, useEffect} from 'react';
import {URL_API} from '../api/const';

export const useAuth = (token) => {
  const [auth, setAuth] = useState({});

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
        setAuth({});
        if (err.status === 401) {
          localStorage.removeItem('bearer');
        }
      });
  }, [token]);

  const clearAuth = () => setAuth({});

  return [auth, clearAuth];
};
