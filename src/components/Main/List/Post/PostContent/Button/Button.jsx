import style from './Button.module.css';
import {SVG} from '../../../../../../UI/SVG';

const Button = () => (
  <button className={style.delete}>
    <SVG icon={'DeleteIcon'} />
  </button>
);

export default Button;
