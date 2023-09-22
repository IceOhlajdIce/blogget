import style from './FormComment.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {updateComment} from '../../../store/commentReducer';

export const FormComment = () => {
  const value = useSelector(state => state.commentReducer.comment);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };

  const handleChange = (e) => {
    dispatch(updateComment(e.target.value));
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <textarea cols='80' value={value} onChange={handleChange} autoFocus>
        </textarea>
      </div>
      <button>Отправить</button>
    </form>
  );
};
