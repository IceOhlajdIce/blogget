import style from './Button.module.css';
import {ReactComponent as DeleteIcon} from './img/delete.svg';

const Button = () => (
  <button className={style.delete}>
    <DeleteIcon />
  </button>
);

export default Button;
