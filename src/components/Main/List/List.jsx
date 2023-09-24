import {usePosts} from '../../../hooks/usePosts';
import style from './List.module.css';
import Post from './Post';
import {Preloader} from '../../../UI/Preloader/Preloader';

export const List = () => {
  const [data, loading] = usePosts();

  return (
    <ul className={style.list}>
      {
        loading ? (<Preloader loader='Fade' />) : (
          data.length > 0 ? (
            data.map((postData) => (
              <Post key={postData.id} postData={postData} />
            ))
          ) : 'Please, login first...'
        )
      }
    </ul>
  );
};
