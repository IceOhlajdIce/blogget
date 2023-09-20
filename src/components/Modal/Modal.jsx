import style from './Modal.module.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import {ReactComponent as CloseIcon} from './img/close.svg';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import {useEffect, useRef, useState} from 'react';

export const Modal = ({id, setClose}) => {
  const [post, comments] = useCommentsData(id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current || e.keyCode === 27) {
      setClose();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        <h2 className={style.title}>{post.title}</h2>

        <div className={style.content}>{post.selftext}</div>

        <p className={style.author}>{post.author}</p>

        {comments.length ?
          <div>
            <button className={style.btn}
              onClick={() => setIsFormOpen(!isFormOpen)}>
              Написать комментарий
            </button>
            {isFormOpen && <FormComment />}
            {
              comments.length ?
              (comments.map(({data}) => (
                <Comments
                  key={data.id}
                  comment={data.body}
                  author={data.author}
                  date={data.created ? data.created : 0}
                />
              ))) :
                <p>Нет комментариев</p>
            }
          </div> :
          <p>Загрузка...</p>
        }

        <button className={style.close} onClick={setClose}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  id: PropTypes.string,
  setClose: PropTypes.func,
};
