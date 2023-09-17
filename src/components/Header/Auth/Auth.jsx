import style from './Auth.module.css';
import {useState} from 'react';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';
import {SVG} from '../../../UI/SVG';
import {urlAuth} from '../../../api/auth';
import {useAuth} from '../../../hooks/useAuth';

export const Auth = ({token, delToken}) => {
  const [auth, clearAuth] = useAuth(token);
  const [isLogout, setIsLogout] = useState(false);

  const logout = () => {
    clearAuth();
    delToken();
  };

  return (
    <div className={style.container}>
      { auth.name ? (
        <>
          <button className={style.btn} onClick={() => setIsLogout(!isLogout)}>
            <img className={style.img} src={auth.img} title={auth.name}
              alt={`Аватар ${auth.name}`} />
          </button>
          {isLogout &&
          <button className={style.logout} onClick={logout}>
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
  delToken: PropTypes.func,
};
