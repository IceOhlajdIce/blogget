import style from './List.module.css';
import Post from './Post';
import {Preloader} from '../../../UI/Preloader/Preloader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/action';
import {Outlet, useParams} from 'react-router-dom';

export const List = () => {
  const data = useSelector(state => state.postsReducer.data);
  const loading = useSelector(state => state.postsReducer.loading);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '100px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {
          loading ? (<Preloader loader='Fade' />) : (
            data.length > 0 ? (
              data.map(({data}) => (
                <Post key={data.id} postData={data} />
              ))
            ) : 'Please, login first...'
          )
        }
        <li ref={endList} className={style.end} />
      </ul>
      <Outlet />
    </>
  );
};
