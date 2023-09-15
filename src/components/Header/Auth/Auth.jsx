import style from './Auth.module.css';
import {SVG} from '../../../UI/SVG';
import PropTypes from 'prop-types';


export const Auth = ({auth}) => (
  <button className={style.button}>
    { auth ? auth :
      <SVG icon='LoginIcon' width='100%' height='100%' className={style.svg} />
    }
  </button>
);

Auth.propTypes = {
  auth: PropTypes.bool,
};
