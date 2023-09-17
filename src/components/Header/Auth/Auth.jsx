import style from './Auth.module.css';
import {useContext, useState} from 'react';
import {Text} from '../../../UI/Text';
import {SVG} from '../../../UI/SVG';
import {urlAuth} from '../../../api/auth';
import {authContext} from '../../../context/authContext';

export const Auth = () => {
  const {auth, clearAuth} = useContext(authContext);
  const [isLogout, setIsLogout] = useState(false);

  const logout = () => {
    clearAuth();
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
