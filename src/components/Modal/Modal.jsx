import style from './Modal.module.css';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hooks/useCommentsData';
import {ReactComponent as CloseIcon} from './img/close.svg';
import {Comments} from './Comments/Comments';
import {FormComment} from './FormComment/FormComment';
import {useEffect, useRef, useState} from 'react';
import {Preloader} from '../../UI/Preloader/Preloader';
import {useNavigate, useParams} from 'react-router-dom';

export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [post, comments, status] = useCommentsData(id);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const overlayRef = useRef(null);

  const handleClick = (e) => {
    const target = e.target;
    if (target === overlayRef.current) {
      navigate(`/category/${page}`);
    }
  };

  const handleEsc = (e) => {
    if (e.keyCode === 27) {
      navigate(`/category/${page}`);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClick);
    document.addEventListener('keydown', handleEsc);
    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {status === 'loading' && (
          <>
            <p>Загрузка...</p>
            <Preloader />
          </>
        )}
        {status === 'error' && 'Error'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>{post.title}</h2>

            <div className={style.content}>{post.selftext}</div>

            <p className={style.author}>{post.author}</p>

            <div>
              <button className={style.btn}
                onClick={() => setIsFormOpen(!isFormOpen)}>
                Написать комментарий
              </button>
              {isFormOpen && <FormComment />}
              {
                comments.length ?
                (comments.map(({data}) => data.body && (
                  <Comments
                    key={data.id}
                    comment={data.body}
                    author={data.author}
                    date={data.created}
                  />
                ))) :
                  <p>Нет комментариев</p>
              }
            </div>
          </>
        )}

        <button className={style.close}
          onClick={() => navigate(`/category/${page}`)}>
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
