import style from './FormComment.module.css';
import {useRef} from 'react';

export const FormComment = () => {
  const areaRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(areaRef.current.value);
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div>
        <textarea cols='80' ref={areaRef} autoFocus></textarea>
      </div>
      <button>Отправить</button>
    </form>
  );
};
