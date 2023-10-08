import style from './Search.module.css';
import {SVG} from '../../../UI/SVG';
import {useDispatch} from 'react-redux';
import {useState} from 'react';
import {searchRequest} from '../../../store/search/searchAction';

export const Search = () => {
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const handlerSubmit = (e) => {
    e.preventDefault();
    dispatch(searchRequest(search));
  };

  return (
    <form className={style.form} onSubmit={handlerSubmit}>
      <input
        className={style.search}
        type='search'
        onChange={e => setSearch(e.target.value)}
        value={search}
      />
      <button className={style.button}>
        <SVG icon='SearchIcon' width='100%' height='100%'/>
      </button>
    </form>
  );
};
