import style from './Search.module.css';
import {SVG} from '../../../UI/SVG';

export const Search = () => (
  <form className={style.form}>
    <input className={style.search} type='search' />
    <button className={style.button}>
      <SVG icon='SearchIcon' width='100%' height='100%'/>
    </button>
  </form>
);
