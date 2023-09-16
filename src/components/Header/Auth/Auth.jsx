import style from './Auth.module.css';
import {SVG} from '../../../UI/SVG';
import PropTypes from 'prop-types';
import {urlAuth} from '../../../api/auth';
import {Text} from '../../../UI/Text';
import {useEffect, useState} from 'react';
import {URL_API} from '../../../api/const';

export const Auth = ({token}) => {
  const [auth, setAuth] = useState({});
  const [isLogout, setIsLogout] = useState(false);

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
        console.err(err.status);
        setAuth({});
        if (err.status === 401) {
          localStorage.removeItem('bearer');
        }
      });
  }, [token]);

  const delToken = () => {
    setIsLogout(false);
    setAuth({});
    localStorage.removeItem('bearer');
  };

  return (
    <div className={style.container}>
      { auth.name ? (
        <>
          <button className={style.btn} onClick={() => setIsLogout(!isLogout)}>
            <img className={style.img} src={auth.img} title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {isLogout && <button className={style.logout} onClick={delToken}>
          Выйти
          </button>}
        </>
      ) : (
        <Text className={style.authLink} As='a' href={urlAuth}>
          <SVG
            icon='LoginIcon'
            width='100%'
            height='100%'
            className={style.svg} />
        </Text>
      )}
    </div>
  );
};

Auth.propTypes = {
  token: PropTypes.string,
};
