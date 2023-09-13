import style from './Layout.module.css';
import {object} from 'prop-types';

export const Layout = ({children}) => (
  <div className={style.container}>
    {children}
  </div>
);

Layout.propTypes = {
  children: object,
};
